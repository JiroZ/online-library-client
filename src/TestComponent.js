import axios from 'axios'

const TestComponent = () => {

    const config = {
        headers: {
            'Content-Type': 'application/JSON'
        }
    };

    axios.get("http://localhost:8989/", config )
        .then(response => {
        console.log(response)
    })

    return(
        <>
        <div>
            <p>Test Component</p>
        </div>
        </>
    )
}

export default TestComponent;
