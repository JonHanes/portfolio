import React from 'react'

function CS_GitHub(props) {
    return (
        <div className="fragment" id="gitHub">
            <h4 className="primaryTopic">GitHub</h4>
                <h5 className="secondaryTopic">Git commands</h5><br/>
                <ul>
                    <li><b>git add .</b> - Adds all files to be deployed</li>
                    <li><b>git commit -m "<i>Text explaining the changes</i>"</b> - Create a commit to the repository</li>
                    <li><b>npm run deploy</b> - Deploy the files you have been working on to the repository</li>
                    <li><b>git push -u origin master</b> - Push the changes to the master repository</li>
                </ul>
            </div>
    )
}

export default CS_GitHub;

