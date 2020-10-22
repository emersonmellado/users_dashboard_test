import React, { useEffect, useState } from "react";
import "./style.css";
import xml2js from "xml2js";

const parseXML = data => {
  const parser = new xml2js.Parser();
  parser.parseString(data, (err, result) => {
    const ids = result.feed.entry.map(e => e.id[0]);
    console.log("IDS:", ids);
  });
};

export default function App() {
  const [xml, setXml] = useState();
  useEffect(() => {
    fetch("https://digital.costmine.com/endpoint.xml")
      .then(response => response.text())
      // .then(str => new window.DOMParser().parseFromString(str, "application/xml"))
      .then(data => setXml(parseXML(data)));
  }, []);

  // const [file, setFile] = useState();

  // //"https://digital.costmine.com/endpoint.xml"
  // useEffect(()=>{
  //   if (file){
  //     const getData = async () => {
  //       return await fetch(file);
  //     }
  //   }
  // }, [file])
  // const handleChange = (e) => {
  //   setFile(e.target.value);
  // }
  return (
    <div>
      <h1>Changing from the browser, pretty cool!</h1>
      <p>Start editing to see some magic happen :)</p>
      <br />
      {xml}
      {JSON.stringify(xml)}
    </div>
  );
}
