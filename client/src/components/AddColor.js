import React from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

// state = { users: [{ id: 'ab35', firstName: 'joe', job: { title: 'director' } }] }
// this.setState(prevState => {
//     const index = prevState.users.find(u => ui.id === 'ab35');
//     return set(
//         prevState,
//         `users[${index}].job`, // this could also be ['users', index, 'job']
//         'new title'
//     )
// });

class AddColor extends React.Component {
    constructor() {
        super()
        this.state = {
            color: "",
            code: { hex: "" }
        };
    }

    handleChange = e => {
        e.preventDefault()

        this.setState({ color: e.target.value })

        if (this.state.color === 'red') {
            this.setState({ hex: '#FF0000' })
        } else if (this.state.color === 'lime') {
            this.setState({ hex: '#00FF00' })
        } else if (this.state.color === 'green') {
            this.setState({ hex: '#008000' })
        } else if (this.state.color === 'purple') {
            this.setState({ hex: '#800080' })
        }
    }

    addColor = e => {
        e.preventDefault()
        axiosWithAuth()
            .post()
            .then()
            .catch()
    }

    render() {
        console.log('AddColor.js', this.state)
        return (
            <div className='add-color-wrap'>
                <p>AddColor.js</p>
                <form className='add-color-form' onSubmit={this.addColor}>
                    {/* <input
                        type='text'
                        value='color'
                        placeholder='Enter Color Name'
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        value='hex'
                        placeholder='Enter Hex Code'
                        value={this.state.code.hex}
                        onChange={this.handleChange}
                    /> */}
                    <select className='add-color-selector' value={this.state.value} onChange={this.handleChange}>
                        <option defaultValue="null">Select Color</option>
                        <option value="red">Red</option>
                        <option value="lime">Lime</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                    </select>
                    <button>Add Color</button>
                </form>
            </div>
        )
    }
}

export default AddColor;