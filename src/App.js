import React from  "react";
export default function App() {
  const [milisecond, setMilisecond] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const status = React.useRef(false);
  const intervalStore = React.useRef(null);
  const [buttonString, setButtonString] = React.useState(false);
  const handleClick = ()=> {
    status.current = !status.current;
    if(status.current) {intervalStore.current = window.setInterval(() => {
      setMilisecond((ms) => {
        if(ms < 99){
          return ms + 1;
        }
        else{
          setSecond((s)=>{
            if(s < 59){
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
    }
    else if(status.current==false){
        window.clearInterval(intervalStore.current);
    };
    setButtonString((prev)=>!prev);
  };

