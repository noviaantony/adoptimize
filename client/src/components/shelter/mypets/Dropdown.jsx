import {useState} from "react"
// import './Dropdown.css'



const Dropdown = () => {


  // const [isActive, setIsActive] = useState(false);
  // const [selected, setSelected] = useState("Choose Breed")

  // const options = ['Ragdoll', 'Maine Coon', 'British Shorthair']

  return (

  // <div className="bg-white">
  //   <div onClick = {(e) => setIsActive(!isActive)} className="font-nunito dropdown-btn">
  //     {selected} 
  //     <span className="fas fa-caret-down"></span>
  //   </div>
  //   {isActive && (
  //     <div className="dropdown-content">
  //       {options.map((option) => (
  //         <div
  //           onClick = {(e) => {setSelected(option); setIsActive(false);}} className="dropdown-item">
  //         {option}
  //         </div>
  //       ))}
  //     </div>
  //   )}
  // </div>

  <select class="ui dropdown rounded-xl">
  <option value="1">Domestic Shorthair</option>
  <option value="0">Ginger</option>
  <option value="2">British Shorthair</option>
  <option value="3">Siamese</option>
  <option value="4">Ragdoll</option>
  <option value="5">Bengal</option>
</select>

  );




}

export default Dropdown