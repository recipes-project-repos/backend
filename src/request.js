'use strict'

import axios from 'axios';

axios.get('http://localhost:3000/meals')
  .then((response) => {
    // handle success
    console.log('response.data', response.data)
    console.log('response.status', response.status)
  })
  .catch((error) => {
    // handle error
    console.log(error)
  })
