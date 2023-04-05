const data_SS_id = "168OCdHg4rY71cP28eeYXc0_TsubHl2sApDIaOfJp6fA";
const data_sheet_name = "automated-email-tester";
const email_template_name = "first-grader-response.html";
const email_log_sheet_name = "EmailLog";
function bulkEmailSander() {
  const ss = SpreadsheetApp.openById(data_SS_id);
  const ws = ss.getSheetByName(data_sheet_name);
  const responses = getSheetData(ws);

  for (var i = 0, len = responses.length; i < len; i++) {
    let rollnumber = responses[i][3];
    let email = responses[i][1];
    let division = responses[i][4];
    let code = responses[i][6];
    let part = responses[i][5];
    let question = responses[i][7];
    let student_query = responses[i][8];
    let grader_response = responses[i][9];
    let mark_increased = responses[i][10];
    const props = {
      email,
      rollnumber,
      division,
      code,
      part,
      question,
      student_query,
      grader_response,
      mark_increased,
    };

    try {
      if (grader_response) {
        sendEmail(props);
      }
    } catch (e) {
      // Catch the error
      Logger.log(e);
    }
  }
}
