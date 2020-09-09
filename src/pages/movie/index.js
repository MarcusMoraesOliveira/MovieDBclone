import React, { useState, useEffect  } from 'react';
import { Link, useHistorym, useParams } from 'react-router-dom';

export default function movie(){
   const { id } = useParams()
   return(
     <div>
       {console.log(id)}
     </div>
   )

   
}