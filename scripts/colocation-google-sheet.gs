// ============================================================
// SISCOM COLOCATION LEADS — Google Apps Script
// ============================================================
// Google Sheet Name:  "Siscom Colocation Leads"
// Script Description: "Receives colocation quote requests from siscom.tech and logs them to this sheet. Sends an email notification to the infrastructure team."
// ============================================================
// HOW TO DEPLOY:
// 1. Create a Google Sheet named "Siscom Colocation Leads"
// 2. Go to Extensions → Apps Script
// 3. Paste this entire script and save
// 4. Click Deploy → New deployment
//    - Type: Web app
//    - Description: "Siscom Colocation Form Webhook v1"
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Copy the deployed URL
// 6. Add to .env.local:  COLOCATION_SHEETS_WEBHOOK_URL=<your-deployed-url>
// ============================================================

function doGet(e) {
  return ContentService.createTextOutput("Colocation Webhook Active")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    // 1. Lock to prevent concurrent edits
    var lock = LockService.getScriptLock();
    lock.tryLock(10000);

    // 2. Parse Data
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 3. Add Header Row if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name / Company",
        "Phone",
        "Selected Region",
        "Preferred Location",
        "Rack Space",
        "Power Requirement (kW)",
        "Workload Nature"
      ]);

      // Bold + style the header row
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#f3f4f6");
    }

    // 4. Format Data
    var timestamp = new Date();
    var phone = (data.phone || "").replace(/\s/g, "");

    sheet.appendRow([
      timestamp,
      data.fullName || "",
      phone,
      data.selectedColocationRegion || "",
      data.preferredLocation || "",
      data.rackSpace || "",
      data.powerRequirement || "",
      data.workloadNature || ""
    ]);

    // Force Phone column (C → 3rd column) to plain text so leading + is preserved
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 3).setNumberFormat("@").setValue(phone);

    SpreadsheetApp.flush();
    lock.releaseLock();

    // 5. Send HTML Email Notification
    var recipient = "tech@siscom.tech";
    var subject = "🏢 Colocation Inquiry — " + (data.fullName || "Unknown");

    var htmlBody =
      '<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#222;">' +

      '<div style="background-color:#FF0055;padding:16px 20px;border-radius:8px 8px 0 0;">' +
        '<h2 style="margin:0;font-size:18px;font-weight:bold;color:#fff;">New Colocation Quote Request</h2>' +
      '</div>' +

      '<div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:20px;">' +

        '<table style="width:100%;font-size:14px;text-align:left;border-collapse:collapse;">' +
          '<tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:bold;width:40%;">Name / Company</td>' +
              '<td style="padding:8px 0;border-bottom:1px solid #eee;">' + (data.fullName || "N/A") + '</td></tr>' +

          '<tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:bold;">Phone</td>' +
              '<td style="padding:8px 0;border-bottom:1px solid #eee;">' + (data.phone || "N/A") + '</td></tr>' +

          '<tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:bold;">Selected Region</td>' +
              '<td style="padding:8px 0;border-bottom:1px solid #eee;">' + (data.selectedColocationRegion || "None selected") + '</td></tr>' +

          '<tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:bold;">Preferred Location</td>' +
              '<td style="padding:8px 0;border-bottom:1px solid #eee;">' + (data.preferredLocation || "N/A") + '</td></tr>' +

          '<tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:bold;">Rack Space</td>' +
              '<td style="padding:8px 0;border-bottom:1px solid #eee;">' + (data.rackSpace || "N/A") + '</td></tr>' +

          '<tr><td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:bold;">Power Requirement</td>' +
              '<td style="padding:8px 0;border-bottom:1px solid #eee;">' + (data.powerRequirement || "N/A") + ' kW</td></tr>' +

          '<tr><td style="padding:8px 0;font-weight:bold;">Workload Nature</td>' +
              '<td style="padding:8px 0;">' + (data.workloadNature || "N/A") + '</td></tr>' +
        '</table>' +

      '</div>' +

      '<p style="margin:20px 0 0;font-size:12px;color:#999;">Submitted from siscom.tech/colocation</p>' +

      '</div>';

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: "New colocation inquiry from " + (data.fullName || "Unknown") + " — Phone: " + (data.phone || "N/A") + ". View in HTML email client for full details.",
      htmlBody: htmlBody
    });

    // 6. Return Success JSON
    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Colocation data saved" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
