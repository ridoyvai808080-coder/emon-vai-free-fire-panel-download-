const PASS1="##emon##", PASS2="@@toufik@@";
const $=x=>document.getElementById(x), unlock=x=>$(x).classList.remove("locked");
function p1(){if($("p1").value===PASS1){$("m1").textContent="✓ Password ঠিক আছে।";unlock("s2")}else $("m1").textContent="✕ Password সঠিক নয়।"}
let fb=false,tk=false;
$("fb").onclick=()=>{fb=true;$("socialDone").disabled=!(fb&&tk)};
$("tk").onclick=()=>{tk=true;$("socialDone").disabled=!(fb&&tk)};
function socialDone(){if(fb&&tk){$("m2").textContent="✓ Social step completed.";unlock("s3");$("p2b").disabled=false}}
function p2(){if($("p2").value===PASS2){$("m3").textContent="✓ Password ঠিক আছে।";unlock("ad2");unlock("s4");$("idb").disabled=false}else $("m3").textContent="✕ Password সঠিক নয়।"}
function verify(){let v=$("idn").value.trim(),email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),phone=/^[0-9+()\-\s]{7,20}$/.test(v);if(email||phone){$("m4").textContent="✓ Verification complete.";unlock("dl")}else $("m4").textContent="একটি বৈধ Gmail অথবা phone number দিন।"}
$("year").textContent=new Date().getFullYear();
