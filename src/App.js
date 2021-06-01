 React from "react";
export default function App() {
  const [milisecond, setMilisecond] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [status, setStatus] = React.useState("start");
  const handleClick = ()=> {
    const interval = window.setInterval(() => {
      setMilisecond((ms) => {
        if(ms < 99){
          return ms + 1;
        }
        else{
          setSecond((s)=>{
            if(s < 9){
              return s+1;
            }
            else{
              return 0;
            }
          });
          return 0;
        }
      });
    }, 10);
  };



  return (
    <div className="App">
      <span>{second}</span>.<span>{milisecond}</span>
      <button onClick={handleClick}>{status}</button>
    </div>
  );
}
