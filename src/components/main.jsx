import React, { Component } from 'react';
import '../../src/index.css'

export default class Main extends Component {
    render() {
        return (
            <>
            <div className='application'>
                <main>
                    <div className='search-box'>
                        <input 
                        type='text' 
                        className='search-bar'
                        placeholder='Pesquisar...'
                        />
                      
                    </div>
                </main>
            </div>
            </>
        )   
    }
}
