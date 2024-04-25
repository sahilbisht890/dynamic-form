function restrictValue(event, regexCheck) {
    let key = event.key;
    const regexName = /[^a-zA-Z]+/; //form name ;
    const regexPhone = /[^0-9]+/;
    const regexPlace = /[^a-zA-z\s]+/
    let value = event.target.value;

    let regex = { 'username': regexName, 'phone': regexPhone, 'place': regexPlace }
    if (regex[regexCheck].test(key) && key != 'Backspace'&&key!='ArrowLeft'&&key!='ArrowRight') {
        event.preventDefault();
        return;
    }
    else {
        if (regexCheck == 'place') {
            if (value.length == 0 && key == ' ') {
                event.preventDefault();
            } else if (value.at(-1) == ' ' && key == ' ') {
                event.preventDefault();
            }
        }
    }
}

const parent=document.getElementById('educationContainer');
let totalID=1;

function shiftId(oldId,newId,add)
{
      const allForm=document.querySelectorAll('#educationContainer > div');
      console.log(allForm);
        while(newId<=totalID)
        {       
             allForm[oldId-1].id ='education'+newId;
             allForm[oldId-1].querySelector('#Add'+(oldId+add)).id='Add'+newId;
             allForm[oldId-1].querySelector('#remove'+(oldId+add)).id='remove'+newId;
             const heading=allForm[oldId-1].querySelector('#heading'+(oldId+add));
             heading.innerHTML='FORM '+newId;
             heading.id='heading'+newId;
             ++newId;
             ++oldId;
        }

}

function AddDegree(event)
{
    ++totalID;
    if(totalID==2)
    {
        showCross('remove'+1);
    }
    let idclicked=parseInt(event.target.id.slice(3));
    shiftId(idclicked+1,idclicked+2,0);
    let unid=idclicked+1;
    const element=document.getElementById('education'+idclicked);
    let text=element.innerHTML;
    text=text.replaceAll('Add'+idclicked,'Add'+unid);
    text=text.replaceAll('remove'+idclicked,'remove'+unid);
    text=text.replaceAll('heading'+idclicked,'heading'+unid);
    text=text.replaceAll('FORM '+idclicked,'FORM '+unid);

    const newElement=document.createElement('div');
    newElement.id='education'+unid;
    newElement.innerHTML=text;
    element.insertAdjacentElement('afterend', newElement);
}



function RemoveDegree(event)
{
    let idclicked=parseInt(event.target.id.slice(6));
    --totalID;
    const element=document.getElementById('education'+idclicked);
    parent.removeChild(element);
    shiftId(idclicked,idclicked,1);

    if(totalID==1)
    {
          hideCross('remove'+1);
    }

}

function hideCross(id)
{
    document.getElementById(id).style.display='none';
}

function showCross(id)
{
    document.getElementById(id).style.display='inline-block';
}









// let unid=1;
// let totalField=1;
// const set = new Set([0]);
// let flag=true;
// function AddDegree(event)
// {
   
//     if(flag=true)
//     {

//         for(let i of set)
//         {
//                showCross('remove'+i);
//                flag=false;
//         }

//     }
//     let nos=event.target.id.slice(3);
//     const element=document.getElementById('education'+nos);
//     let text=element.innerHTML;
//     set.add(unid);
//     text=text.replaceAll('Add'+nos,'Add'+unid);
//     text=text.replaceAll('remove'+nos,'remove'+unid);
//     const newElement=document.createElement('div');
//     newElement.id='education'+unid;
//     newElement.innerHTML=text;
//     element.insertAdjacentElement('afterend', newElement);
//     ++unid;
//     ++totalField;
// }


// function RemoveDegree(event)
// {
//     --totalField;
//     let nos=event.target.id.slice(6);
//     set.delete(parseInt(nos));

//     if(totalField==1)
//     {
//           for(let i of set)
//           {
//                  hideCross('remove'+i);
//                  flag=true;
//           }
           
//     }
//     console.log(nos);
//     const element=document.getElementById('education'+nos);
//     parent.removeChild(element);
// }


