import React from 'react'
import Image from 'react-bootstrap/Image';

//#region Internal Dependencies
import PHP_Artisan_Iteration from '../../Assets/Images/Snippets/PHP_Artisan_Iteration.png';
//#endregion

function CS_PHP(props) {
    return (
        <div className="fragment" id="phpNotes">
            <h4 className="primaryTopic">PHP</h4>
            <h5 className="secondaryTopic">Laravel</h5>
            <h6 className="tertiaryTopic">PHP Artisan</h6>
            <b className="quaternaryTopic">Commands</b>
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
                <li>Creating models alongside the migration - <b>php artisan make:model StudentTeacher -m</b><br/>
                A migration can be performed alongside the creation of the model instance.</li>
                <li>Editing existing table - <b>php artisan make:migration change_accounts_table_name --table=accounts</b><br/>
                This convention will allow you to only change one particular column of the table, with the included boilerplate code.
                </li>
            </ul>
            <b className="quaternaryTopic">When creating migrations [with example usage]</b>
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
                <li>$table-{">"}integer('userId')-{">"}<b>unsigned()</b>;<br/>
                $table-{">"}<b>foreign('userId')</b>-{">"}<b>references('id')</b>-{">"}<b>on('users');</b><br/>
                This enables us to set up foreign keys to other tables.</li>
                <li>Something to note; by default Laravel migrations have the down function remove the entire table if rolled back.<br/>
                This is by default in the migration settings (the <b>down</b> function.)<br/>
                Upon making slight changes, it might be best to ensure that the down function only drops the newly created tables.</li>
            </ul>
            <b className="quaternaryTopic">When modifying columns in migrations [with example usage]</b>
            <ul>
                <li>$table-{">"}<b>dropColumn('title')</b>; || $table-{">"}dropColumn(['title', 'content'])<br/>
                Drops the column(s) from the database upon this function being called.</li>
                <li><b>Schema::rename</b>('studentsTeachers', 'students_teachers')<br/>
                Allows the renaming of columns.</li>
            </ul>
            <b className="quaternaryTopic">Model creation - Eloquent</b>
            <ul>
                <li>Much like Entity Framework, this ORM system allows you to work with DB records through the use of models, corresponding to these records.<br/>
                These models can then be interacted with directly, instead of writing raw SQL.</li>
                <li>Model creation - <b>php artisan make:model Flight</b></li>
                <ul><li>Models are then stored under the <b>app</b> folder, and extend the Model template.</li></ul>
            </ul>

            <h6 className="quaternaryTopic">Controllers</h6>
            <ul>
                <li>You can create a Controller by using the following command.<br/>
                <i>php artisan make:controller [NameOfController] --resource</i></li>
                <li>The controller will help you with routing.</li>
                <li>Place something like the following into the routes folder, into web.php<br/>
                    <i>{"Route::resource('/accounts', 'AccountController')->only(['index', 'show']);"}</i>
                        <ul>
                            <li>The keyword <b>/accounts</b> denotes the URL extension that the controller is managing.</li>
                            <li><b>AccountController</b> in this case is the controller in charge of handling this.</li>
                            <li>The <b>only</b> keyword denotes that only some of the functions inside the AccountController should be used; <br/>
                            It seems that for this particular example there is no need to edit the records.</li>
                        </ul>
                    </li>
            </ul>

            <h5 className="tertiaryTopic">Tinker</h5>
            <br/>

            <b className="quaternaryTopic">Fetching records using Tinker</b>
            <ul>
                <li>Run the command <b>php artisan tinker</b>.</li>
                <li>Fetch the records by using the template.<br/>
                <b>$flights = App\Flight:all();</b></li>
                <ul>
                    <li>Something that should be noted:<br/>
                    By default Laravel assumes that the naming in the DB is snake case.<br/>
                    With this convention, a model name of StudentTeacher would have to be called student_teachers<br/>
                    You can specify the name on the DB end by including the following statement into your model.<br/>
                    <b>protected $table = 'studentTeachers';</b>
                    </li>
                <li>After you have run that first query for getting the flights, you can then find by index using the following.<br/>
                <b>$flights[1];</b></li>
                <li>You can find records by using the following as well.<br/>
                <i>$res = App\Flight::find(1)</i><br/>
                This allows you to get a reference to the record and edit it like this.<br/>
                $res-{">"}destination = 'Finland'<br/>
                After this you can proceed with saving the changes.</li>
                </ul>
            </ul>

            <b className="quaternaryTopic">Filtering records using Tinker</b>
            <ul>
                <li>You can use the where-clause in Laravel as well.<br/>
                <i>App\Flight::where('destination', 'Finland')-{">"}get()-{">"}first();</i>
                <br/>The <b>first-clause</b> is optional and if you want to return an array then remove this.</li>
            </ul>

            <b className="quaternaryTopic">Iterating through records using Tinker</b>
            <ul>
                <li>Foreach shown below.</li>
                <li><Image src={PHP_Artisan_Iteration} thumbnail/></li>
                <li><i>$flights-{">"}<b>first();</b></i> is also a valid command, as well as <b>last</b>.</li>
            </ul>

            <b className="quaternaryTopic">Updating records using Tinker</b>
            <ul>
                <li>The records can be updated using the tinker with the following commands.<br/>
                <b>$account = new App\Account();</b><br/>
                After this, you will need to give the new record information to store.<br/>
                <i>$account-{">"}name = 'Saving account';</i><br/>
                To verify what data was stored inside the new model, print it out using <i>$account</i>
                <li>Finally, saving the changes can be done with the command <i>$account-{">"}save();</i></li>
                </li>
            </ul>
        </div> 
    )
}

export default CS_PHP;