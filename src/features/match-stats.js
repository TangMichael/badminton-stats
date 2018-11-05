import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default class MatchStats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {
                    headerName: "Opponent",
                    field: "opponent"
                }, {
                    headerName: "Score",
                    field: "score"
                }, {
                    headerName: "Result",
                    field: "result"
                }

            ],
            rowData: [
                {
                    opponent: "Toyota",
                    score: "21-10",
                    result: "Win"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div
                    className="ag-theme-balham"
                    style={{
                    height: '500px',
                    width: '600px'
                }}>
                    <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData}></AgGridReact>
                </div>

            </div>
        )
    }
}
