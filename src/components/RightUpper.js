import React, { useState, useEffect } from "react";
import { ReactComponent as ColorLogo } from "../images/Icon-colour.svg";
import { ReactComponent as HighlightLogo } from "../images/Icon-highlighter.svg";
import { ReactComponent as QuoteLogo } from "../images/Icon-quote.svg";
import { ReactComponent as AlignCenterLogo } from "../images/Icon-align-center.svg";
import { ReactComponent as AlignJustifyLogo } from "../images/Icon-align-justify.svg";
import { ReactComponent as AlignLeftLogo } from "../images/Icon-align-left.svg";
import { ReactComponent as AlignRightLogo } from "../images/Icon feather-align-right.svg";
import "../styles/RightUpper.css";
import { ReactComponent as BulletLogo } from "../images/Icon-bullets.svg";
import { useStateValue } from "./StateProvider";

function RightUpper() {
  const [{ fontsize, color, align }, dispatch] = useStateValue();
  const container = React.createRef();
  const container2 = React.createRef();
  const [open, SetOpen] = useState(false);
  const [open2, SetOpen2] = useState(false);
  const [alignImage, setAlignImage] = useState(<AlignJustifyLogo />);

  const fontSize = (e) => {
    dispatch({
      type: "FONT_SIZE",
      fontsize: e.target.value,
    });
  };
  const heading = (e) => {
    dispatch({
      type: "HEADING",
      heading: e.target.value,
    });
    console.log(e.target.value);
  };
  const colors = (e) => {
    dispatch({
      type: "COLOR",
      color: e.target.value,
    });
    console.log(e.target.value);
  };
  const aligns = (e) => {
    dispatch({
      type: "ALIGN",
      align: e.target.value,
    });

    const setState=()=>{
      if(e.target.value==='center'){
        setAlignImage(<AlignCenterLogo/>)
      }
      if(e.target.value==='left'){
        setAlignImage(<AlignLeftLogo/>)
      }
      if(e.target.value==='right'){
        setAlignImage(<AlignRightLogo/>)
      }
      if(e.target.value==='justify'){
        setAlignImage(<AlignJustifyLogo/>)
      }
      
    }
    setState();
    console.log(e.target.value);
  };
  const fontFamilys = (e) => {
    dispatch({
      type: "FONT_FAMILY",
      fontfamily: e.target.value,
    });
    
    
  };
  const onClick = () => {
    SetOpen(!open);
  };
  const onClick2 = () => {
    SetOpen2(!open2);
  };

 


  
  const colorOption = [
    { value: "white", text: "White" },
    { value: "red", text: "Red" },
    { value: "yellow", text: "Yellow" },
    { value: "green", text: "Green" },
  ];
  const colorOptionList = colorOption.map((el) => (
    <button value={el.value} onClick={colors} className='button__dropdown'>
      {el.text}
    </button>
  ));
  const alignList = [
    { value: "center", icon: <AlignCenterLogo /> },
    { value: "justify", icon: <AlignJustifyLogo /> },
    { value: "left", icon: <AlignLeftLogo /> },
    { value: "right", icon: <AlignRightLogo /> },
  ];
  const alignListButton = alignList.map((el) => (
    <label>
    <button value={el.value} onClick={aligns} className='button__dropdown2'>
    {el.value}{el.icon}
    </button>
    </label>
  ));


  const highlight=()=>{
    dispatch({
        type:'HIGHLIGHT',
        highlight:{backgroundColor:'yellow'}
    })
  }

  const fontFamily = [
    { value: "Verdana", style: { fontFamily: "verdana" } },
    { value: "Calibri", style: { fontFamily: "calibri" } },
    { value: "cursive", style: { fontFamily: "cursive" } },
  ];
  const fontFamilyList = fontFamily.map((el) => (
    <option value={el.value} style={el.style}>
      {el.value}
    </option>
  ));

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      
    };
  });
  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      SetOpen(false);
    }
  };
  

  return (
    <div className="right">
      <div className="right__left">
        <select className="right__text" onChange={heading}>
          <option selected disabled hidden>
            style text
          </option>
          <option value='2em'>Heading 1</option>
          <option value='1.5em'>Heading 2</option>
          <option value='1.17em'>Heading 3</option>
          <option value='1.33em'>Heading 4</option>
          <option value='.83em'>Heading 5</option>
          <option value='.67em'>Heading 6</option>
        </select>
        <select className="right__font" onChange={fontFamilys}>
          <option selected disabled hidden>
            Font Family
          </option>
          {fontFamilyList}
        </select>
        <select className="right__size" onChange={fontSize}>
          <option value="10px">1</option>
          <option value="11px">2</option>
          <option value="12px">3</option>
          <option value="13px">4</option>
          <option value="14px">5</option>
          <option value="15px">6</option>
          <option value="16px">7</option>
          <option value="17px">8</option>
          <option value="18px">9</option>
          <option value="19px">10</option>
          <option value="20px">11</option>
          <option value="21px">12</option>
          <option value="22px">13</option>
          <option value="23px">14</option>
          <option value="24px">15</option>
          <option value="25px">16</option>
          <option value="26px">17</option>
          <option value="27px">18</option>
          <option value="28px">19</option>
          <option value="29px">20</option>
          <option value="30px">21</option>
          <option value="31px">22</option>
          <option value="32px">23</option>
        </select>
        {/* <button className='right__color'><ColorLogo/></button> */}
        <div class="container" ref={container}>
          <button className="button" onClick={onClick}>
            <ColorLogo />
          </button>
          {open && <div class="dropdown">{colorOptionList}</div>}
        </div>

        <button className="right__color" onClick={highlight}>
          <HighlightLogo />
        </button>
        <button className="right__color">
          <QuoteLogo />
        </button>
        <div className="right__align">
          {/* <Select
            style={{ width: 500 }}
            defaultValue={options[0]}
            options={options}
            components={{ Option: IconOption }}
          /> */}
          {/* {alignListButton} */}
          <div className="container2">
            <button className="button" onClick={onClick2} ref={container2}>
              {alignImage}
            </button>
            {open2 && <div class="dropdown2">{alignListButton}</div>}
          </div>
        </div>
        <button className="right__bullet">
          <BulletLogo />
        </button>
      </div>
      <div className="right__right">
        <button className="right__save">SAVE</button>
        <button className="right__publish">PUBLISH</button>
      </div>
    </div>
  );
}

export default RightUpper;
