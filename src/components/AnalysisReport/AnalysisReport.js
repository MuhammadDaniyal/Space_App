import React from 'react';
import Layout from "../../Layout";
import './AnalysisReport.css';

const AnalysisReport = () => {
  return (
    <Layout>
        <div className='analysis'>
            <iframe title="Report Section" width="600" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiOWYwNzRlYWYtZDc4Mi00MGIxLWJkZTMtYzdkYWM4MWE1ZWFjIiwidCI6ImJiMzNiNzhlLTJlM2MtNDU0ZS1hMGUyLTg1ZjNhMzc5OGZmYyIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
    </Layout>
  )
}

export default AnalysisReport