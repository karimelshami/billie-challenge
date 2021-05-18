import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import Cookies from "js-cookie";
import $, { trim } from "jquery";

const HelloWorld = () => (
  <table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
  </table>
);
const Routes = () => {
  let history = useHistory();
  useEffect(() => {
    // solution(130);
    trim("Why not do it again", 10);
  }, []);

  function occuresInSubString(s, length) {
    let count = 0;
    for (let i = 0; i < length; i++) {
      if (s[i] === "a") count++;
    }
    return count;
  }

  function trim(message, K) {
    // let trimmedMessage = ""
    // let messageLength = message.length
    // if(messageLength < K) return message
    // if (K < 1) return trimmedMessage
    // let regex = new RegExp(`^.{0,${K - 1}}}[^[^-\s]](?= |$)`)
    // trimmedMessage = message.match(regex)[0] || ""
    // return trimmedMessage
    let trimmedMessage = "";
    let arrayOfWords = [];
    let messageLength = message.length;
    if (messageLength < K) {
      return message;
    } else {
      arrayOfWords = message.split(" ");
      let numberOfCharcters = 0
      

    }
  }

  // function solution(A) {
  //   let ArryOfIntegres = String(A).split("").map((num) => {
  //     return Number(num)
  // })
  // let reversedNuber = ""
  //   while (ArryOfIntegres.length > 0) {
  //     reversedNuber += ArryOfIntegres.length > 0 ? ArryOfIntegres.shift() : "";
  //     reversedNuber += ArryOfIntegres.length > 0 ? ArryOfIntegres.pop() : "";
  //   }
  //   return console.log(reversedNuber);
  // }

  function repeatedString(s, n) {
    // aba aba aba a
    //7
    debugger;
    let count = 0;
    let occurcesInOriginalString = 0;
    let numberOfOccurnesWithOutTriming = 0;
    let originalStringLength = s.length;
    let numberOfIterations = Math.round(n / originalStringLength);
    let remaningCharcters = n - numberOfIterations * originalStringLength;
    remaningCharcters =
      remaningCharcters < 0 ? remaningCharcters * -1 : remaningCharcters;
    occurcesInOriginalString = occuresInSubString(s, originalStringLength);
    numberOfOccurnesWithOutTriming =
      numberOfIterations * occurcesInOriginalString;
    count = numberOfOccurnesWithOutTriming;
    if (remaningCharcters === 0) {
      console.log(count);
    } else {
      for (let i = 0; i < remaningCharcters; i++) {
        if (s[i] === "a") count++;
      }
      occuresInSubString(s, remaningCharcters);
    }
    console.log(count, "count");
  } //brute force

  return (
    <Switch>
      <Route exact path="/" component={HelloWorld} />
    </Switch>
  );
};
export default Routes;
