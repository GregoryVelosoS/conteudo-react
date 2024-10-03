const Challenge = () => {
    let num1 = 3
    let num2 = 4
    return(
        <div>
            <h1>O primeiro número é {num1}</h1>
            <h1>O segundo número é {num2}</h1>
            <button onClick={() => console.log("A SOMA É: " + (num1 + num2)) }>Somar</button>
        </div>
    )
}

export default Challenge 