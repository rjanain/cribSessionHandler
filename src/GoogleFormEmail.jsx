const  sectionStyle={
    border:"1px solid #dadce0",
    padding:"12px 12px",
    backgroundColor:"#fff",
    borderRadius:"8px",
    marginBottom:"12px"}

const borderedSectionStyle={
    borderBottom: "1px solid #dadce0",
    borderLeft: "1px solid #dadce0",
    borderRight: "1px solid #dadce0",
    borderTop: "8px solid rgb(103,58,183)",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    marginBottom: "12px"
  }

  const linkStyle={
    borderRadius:"4px",
    fontFamily:"Google Sans,Roboto,Helvetica,Arial,sans-serif",
    fontSize:"14px",
    fontWeight:"500",
    padding:"8px 24px",
    textAlign:"center", 
    backgroundColor:"rgb(103,58,183)",
    color:"#fff"
  }

function CommentSection(props){
    const {text}=props
    return(
        <div
                style={sectionStyle}>

                <div style={{padding:"0 12px"}}>
                    <p>{text}</p>
                </div>
            </div>
    )
}

function GoogleFormEmail(props) {
    const {title, message, response,form_link } = props;
  
    return (
      <div style={{color: '#202124',fontFamily: 'Roboto,Helvetica,Arial,sans-serif', fontSize: '14px', fontWeight:
        '400', lineHeight: '20px',textAlign: 'start', wordWrap: 'break-word', margin: '0', padding: '0', width:
        '100%'}}>
            <div style={{padding: '12px', backgroundColor: 'rgb(237,231,246)'}}>
            <div style={{margin: "0 auto", maxWidth: "640px", minWidth: "154px"}}>
            <div style={borderedSectionStyle}>
            <h1 style={{ fontSize:"32px",fontWeight:"400",lineHeight:"42px",   margin:"0 0 12px" }}>{title}</h1>

            <CommentSection text={message}/>
        <div style={sectionStyle}>


        <table style={{ width: '100%', marginBottom: '32px', borderSpacing: 0 }}>
          <tbody>
            {Object.entries(response).map(([key, value], index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'none' }}>
                <th style={{ padding: '8px', textAlign: 'left', width:"30%" }}>{key}</th>
                <td style={{ padding: '8px', verticalAlign: 'top',width:"70%" }}>{value}</td>
              </tr>
            ))}

          <tr  style={{ backgroundColor: '#f2f2f2'}}>
                <th style={{ padding: '8px', textAlign: 'left', width:"30%" }}>Not Satisfy With the response?</th>
                <td style={{ padding: '8px', verticalAlign: 'top',width:"70%" }}>
                <a href={form_link} style={linkStyle} target="_blank" 
                >Submit Final Recheck Request</a>
                   </td>
              </tr>
          </tbody>
          
        </table>
        
        </div>
        </div>
        <CommentSection text="This is an automated email, please do not reply to this email. Thanks. "/>
        </div>
        </div>
      </div>
    );
  }
  

  export default GoogleFormEmail