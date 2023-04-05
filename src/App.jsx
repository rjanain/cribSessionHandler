
import GoogleFormEmail from './GoogleFormEmail';

const response = {
  Rollnumber: "<?= rollnumber ?>",
  Division: "<?= division ?>",
  'Crib Requested For': "<?= part ?>",
  'MCQ Code': "<?= code ?>",
  'Question Number': "<?= question ?>",
  'Student Query': "<?= student_query ?>",
  'Grader Reply': "<?= grader_response ?>",
  'Mark Increased': "<?= mark_increased ?>"
};


const message1 = "Kindly review the grader's response to your recheck request. If you are unsatisfied with their response, please submit your grievance via the provided Google Form only.";
const form_link ="https://forms.gle/g4sPNphz4D8rDx2U7";
const message2 ="Do not reply to this email or send any email to TAs/Instructors regarding this.";

function App(){
  return(
    <GoogleFormEmail 
        title ="Grader Response"
        message = {[
          message1,
          <br/>,<br/>, 
          <strong>{message2}</strong>
        ]}
        response={response}
        form_link ={form_link}
      />
  );
}
export default App
      


