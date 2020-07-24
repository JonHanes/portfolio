import React from 'react'

function CS_PHP(props) {
    return (
        <div id="phpNotes">
            <h4 className="subTitle">PHP</h4>
            <br/>
            <h5>Laravel</h5>
            <h6>PHP Artisan</h6>
            <b>Commands</b>
            <ul>
                <li>Creating a migration - <b>php artisan make:migration</b> [<i>Name of the table</i>]<br/>
                Something to note, Laravel creates the boilerplate code based on the name you gave it.<br/>
                Attempting to name it create_flights_table creates the schema <b>flights</b> with the table blueprint.<br/>
                You can also specify the name of the schema in the arguments after this, with the command <i>--create=flights</i></li>
                <li>Transferring the migrations - <b>php artisan migrate</b></li>
                <li>Rolling back migration by one version - <b>php artisan migrate:rollback</b><br/>
                This technically calls the <b>down</b> method inside the migration, so upon rolling back you could also always trigger a different custom event <br/>(Maybe inputting the changelog to another table?)</li>
                <li>Adding to existing table - <b>php artisan make:migration add_title_content_to_flights_table <i>[Optional: --table=flights]</i></b><br/>
                This creates a new migration file which only expands on the previous table.</li>
            </ul>
            <b>When creating migrations [with example usage]</b>
            <ul>
                <li>$table-{">"}<b>increments</b>('id');<br/>
                This ensures that the ID value of the table is auto-incremented.</li>
                <li>$table-{">"}string('email', 100)-{">"}<b>unique();</b><br/>
                The unique keyword defines this as being a unique record, and the email can be noted to be 100 characters at most.
                </li>
                <li>$table-{">"}<b>rememberToken();</b><br/>
                Upon looking this up, it seems to be a good practice to have a rememberToken for your users table.</li>
                <li>$table-{">"}timestamp('email_verified_at')-{">"}<b>nullable();</b><br/>
                By default Laravel seemingly assumes that the value cannot be set to null.
                </li>
                <li>Something to note; by default Laravel migrations have the down function remove the entire table if rolled back.<br/>
                This is by default in the migration settings (the <b>down</b> function.)<br/>
                Upon making slight changes, it might be best to ensure that the down function only drops the newly created tables.</li>
            </ul>
            <b>When modifying columns in migrations [with example usage]</b>
            <ul>
                <li>$table-{">"}dropColumn('title'); || $table-{">"}dropColumn(['title', 'content'])<br/>
                Drops the column(s) from the database upon this function being called.</li>
            </ul>
            <br/><br/>
        </div> 
    )
}

export default CS_PHP;

