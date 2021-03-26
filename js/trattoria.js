const navigationMenu=document.querySelector('#navigationMenu');
const section_list=document.querySelectorAll('.section_container');
function build_nav ()
{
  // loop for appending li in navigation menu
  for(let i=0;i<section_list.length;i++)
  // iterates on section list
  {
    const name=section_list[i].getAttribute("data-name");
    //create lists for navigation menu
    const li=document.createElement('li');
    //giving each list a div
    const div=document.createElement('div');
    //each attribute has a class="navbar" and  data-id="secion{number of section according to their order comparing to i of (for loop)}"
    div.setAttribute('class','navbar');
    div.setAttribute('data-id',`section${i+1}`);
    //each li takes its text by filling div of its data-name
    div.innerText= `${name}`;
    //appending div in li
    li.appendChild(div);
    //appending each li in navigation menu
    navigationMenu.appendChild(li);
  }
  //making clickable navigation menu list
  navigationMenu.addEventListener('click',function(event)
  {
    const nav_list=navigationMenu.querySelectorAll('li');
    // for reseting background color on clicking on new li
    for(let i=0;i<nav_list.length;i++)
    {
      nav_list[i].querySelector('div').style.backgroundColor="#e5b897";
    }
    const section_id=event.target.getAttribute('data-id');
    const section_item=document.getElementById(section_id);
    section_item.scrollIntoView({behavior: "smooth"});
    event.target.style.backgroundColor="grey";
  });
}
build_nav();
// show active section
function changeLinkState() {
  let index = section_list.length; 
  while(--index && window.scrollY+300 < section_list[index].offsetTop) {}
  const nav_items=navigationMenu.querySelectorAll('div');
   nav_items.forEach((item) => item.style.backgroundColor="#e5b897");
   nav_items[index].style.backgroundColor="grey";
}
window.addEventListener('scroll', changeLinkState);
//clicking submit form response
const submitting=document.querySelector("#submit_button");
submitting.addEventListener('click',function()
{
  const f =document.querySelector("form");
  f.remove();
  const postsubmission=document.createElement('p');
  postsubmission.textContent="Thank you for filling the form";
  postsubmission.setAttribute('id','postform');
  const foot=document.querySelector('#section3');
  foot.appendChild(postsubmission);
});
//show more button response in menu
const more=document.querySelector('.bottom');
more.addEventListener('click',function()
{   
    const show=document.querySelector('.hide');
    show.style.display="block";
    more.style.display="none";
});
//textarea send button 
const textarea_button=document.querySelector('#textarea_button');
const textarea=document.querySelector('textarea');
const section4=document.querySelector('#section4');
textarea_button.addEventListener('click',function()
{
   textarea_button.remove();
   textarea.remove();
   const post_textarea=document.createElement('p');
   post_textarea.innerHTML="<strong><em>Thanks for sharing us your thoughts ^___^ </em></strong>";
   post_textarea.setAttribute('id','post_textarea');
   section4.appendChild(post_textarea);
});