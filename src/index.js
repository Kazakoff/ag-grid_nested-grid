import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  const [rowData] = useState([
    { id: 1,  
      make: [
        {name: 'TTT',
        ssd: 1111111},
      ], 
      model: 'Celica', 
      price: 35000 },
    { id: 2, 
    make: [
      {name: 'Ford',
      ssd: 1111111},
    ], 
    model: 'Mondeo',
    price: 32000 },
    { id: 3, 
      make: [
        {name: 'PPPP',
        ssd: 22222},
      ], 
      model: 'Boxter', 
      price: 72000 },
  ]);


  const [makeColumnDefs] = useState([
    { 
      field: 'name',
      width: 100,  
    },
    { field: 'ssd' },
  ]);

  const [columnDefs] = useState([
    { field: 'make',
      width: 400,
    cellRenderer: ({ data }) => {
      return  <AgGridReact rowData={data.make} columnDefs={makeColumnDefs}></AgGridReact>;
  },
  cellRendererParams: ({ data }) => ({
      id: data.id,
  }),
  },
    { field: 'model' }, 
    { field: 'price' },
  ]);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact rowHeight={100} rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

render(<App />, document.getElementById('root'));
