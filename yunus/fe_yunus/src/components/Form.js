import React, { useState } from 'react'

function Form () {

    const [ block , setBlock ] = useState("A");   
    const [gender, setGender] = useState();

        return (
            <div>
                <div className="App-formheader">
                    Personal Information
                    <p>
                        <div className= "App-form">
                            <p>
                                <label className= "name">
                                Given Name
                                <input name="name" />
                                </label>
                                <label className="name">
                                    Surname
                                    <input name="surname"/>
                                </label>
                            </p>
                            <p>
                                <label className="studentno">
                                    Student Number
                                    <input name="Student Number" />
                                </label>
                                <label className="net">
                                    Net Id 
                                    <input name="Net Id"/>
                                </label>
                            </p>
                            <p>
                                <label className="block">
                                    Block
                                    <select value={block} onChange={(e) => setBlock(e.target.value)} >
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                        <option value="F">F</option>
                                        <option value="G">G</option>
                                        <option value="H">H</option>
                                    </select>
                                </label>
                                <label className="room">
                                    Room Number {block}:
                                    <input number="Room Number:" />
                                </label>
                            </p>
                        </div> 
                    </p>
                </div>
                    <div className="App-formheader">
                        Account Information
                        <div className="App-form">
                            <p>
                                <label className="username">
                                    Username 
                                    <input name="username"/>
                                </label>
                            </p> 
                            <p>
                                <label className="password">
                                    Password 
                                    <input type="password" name="password" />
                                </label>
                                <label className="password">
                                    Confirm Password
                                    <input name="confirm password" />
                                </label>  
                            </p>
                            <p>        
                                <label className="radio"> 
                                    <input type="radio" 
                                    value="Male"
                                    checked={gender === "Male"}
                                    onChange={()=> setGender("Male")}
                                    />
                                    Male
                                </label>  
                                <label> 
                                    <input type="radio" 
                                    value="Female"
                                    checked={gender === "Female"}
                                    onChange={()=> setGender("Female")}
                                    />
                                    Female
                                </label> 
                            </p>   
                        </div>
                    </div>
                <button classname="submit" type="submit" >Submit</button>               
            </div>
        )
    
}

export default Form
