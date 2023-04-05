function getSheetData(ws) {
  /**
   * getsheetData(ws)
   * @param ws Get worksheet variable
   */
  return ws.getDataRange().getValues().slice(1);
}

function getCurrentDateTime() {
  const noon = new Date();
  Logger.log(noon);
  // return noon;
}

function updateCellData(ws, row, col, textData) {
  ws.getRange(row, col, 1).setValue([textData]);
  return;
}

function updateEmailLog(roll_number, email, msg) {
  const ss = SpreadsheetApp.openById(data_SS_id);
  const ws = ss.getSheetByName(email_log_sheet_name);
  const noon = new Date();
  let log = [noon, roll_number, email, msg];
  ws.appendRow(log);
  return;
}

function sendEmail(props) {
  var emailTemp = HtmlService.createTemplateFromFile(email_template_name);
  for (const key in props) {
    emailTemp[key] = props[key];
  }
  Logger.log(emailTemp);

  const htmlMessage = emailTemp.evaluate().getContent();
  const subject = "MA 106 Quiz I: Grader response to your query";
  const textBody =
    "This email required HTML support. Please make sure you open this email with a client that support it";
  const options = {
    name: "MA106 Quiz I Grader Respoonse",
    htmlBody: htmlMessage,
    noReply: true,
  };

  if (props.email && props.email != "") {
    try {
      GmailApp.sendEmail(props.email, subject, textBody, options);
      //Logger.log("Reporter Notified at " + props?.time);
      //console.log(e);
      // Store the email notification.
      //updateNotification(props?.id, props?.time, props?.type, 14);

      Logger.log("Email Sent: " + props?.rollnumber);

      updateEmailLog(props?.rollnumber, props.email, "Email Sent");
    } catch (e) {
      console.log(e);
      updateEmailLog(
        props?.rollnumber,
        props?.email,
        "Error: Unable to sent Email"
      );
    }
  } else {
    console.log("Error: Email Missing");
    updateEmailLog(props?.rollnumber, props?.email, "Error: Email Missing");
  }
}
