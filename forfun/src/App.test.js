import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import {render} from '@testing-library/react'
import Players from './components/Players'
// afterEach(rtl.cleanup)

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('Players Exist', async () => {
  const {findByText} = await render(<App />  )
  findByText(/player/i);
})


//    <Player player={{name:'Alice', country:'Albania', id:'1'}} />