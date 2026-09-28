import React from 'react'
import Card from './components/Card'


const page = () => {
  const m=10,o=30
  const add=(a,b)=>{
    return a+b
  }
  console.log("Sum is ",add(m,o))
  let name ="Vaishnav"
const Name=(a)=>
{
  console.log("Hello my name is ",a)
}
Name(name)
  
  const n=10
const Table=(a)=>{


for(let i=0;i<=n;i++)
{
  console.log(i,"*",5,"=",5*i)
}
}
Table(n)
  
const myo={
  name:"Vaishnav",
  Batch:"S3C",
  College:"CEC",
  Roll_No:"65"
}
console.log(myo)
const insta={
  name:"Vaishnav",
  POST:"754",
  Followers:"1.1M",
  Following:"1021",
  Description:"Self-taught pastry chef&best selling author \nI love to share my passion for baking with the word!"
}
console.log(insta)
const post=[
  {
    name:"Vaishnav",
  },
  {
    like:"150",
    comment:"50",
    share:"40"

  }
]
console.log(post)
//1.positive ,negative or zero
const num=-23
const check =(a)=>{
  if(a>0)
    console.log("Positive")
  else if(a<0)
    console.log("Negative")
  else 
    console.log("The number is zero")
    
}
check(num)
//2.Largest of three numbers
const x=10,y=1,z=100
const large=(a,b,c)=>{
  if(a>b&&a>c)
    console.log(a,"is greater")
  else if(b>c)
    console.log(b,"is greater")
  else
    console.log(c,"is greater")
}
large(x,y,z)
//3.No of even numbers in an array
const numb=[1,3,6,24,64,77,63,22,9]
let count=0
for(let i=0;i<numb.length;i++)
{
  if(numb[i]%2===0)
    count++

}
console.log("Number of even numbers in the array =",count)
//4.check whether a number is present in an array 
const arr=[2,3,1,67,45,34,98,100,54,76]
const key=67
console.log("Let the value to be found be",key)
let f=0
for(let i=0;i<arr.length;i++)
{
  if(arr[i]==key)
  {
    console.log("Element is found at",i+1,"th position")
    f=1
}
}
if(f==0)
  console.log("element is not found")
const obj1={
  Name:"Vaishnav",
  Age:19
}
const ytvideo={
  Name:"Gold Rush Video Song",
  Channel:"Sony Musi South",
  Views:"582K",
  Upload_date:"1 day ago"
}
  return (
    <div>
      
      <p className='text =8xl font-bold text-green-400'>Project</p>
      <p className='text =8xl'>NAME:{obj1.Name}</p>
      <p className='text =8xl'>AGE:{obj1.Age}</p>




      
    <Card data={ytvideo}/>
    </div>

  )
}

export default page