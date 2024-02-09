# Problem that I Addressed...


<p>There was a need for extra line that declares XSRFToken, but that was not originally there in the tutorial... Searched for a long time in forums and finally found the way to resolve by declaring the 7th line code in axios.js fil
e...</p>

<a href="https://laracasts.com/discuss/channels/laravel/laravel-ajax-419-unknown-status">Link for the solution...</a>

Images
<br/>
<br/>

<div>
  <img src="https://github.com/shavakkar/ticktokClone/blob/main/IgnoreFolder/error1.png" />
  <p>This is the Error that I have Encountered....</p>
</div>
<br/>
<br/>

<div>
  <img src="https://github.com/shavakkar/ticktokClone/blob/main/IgnoreFolder/error2.png" />
  <p>Here the files are showed in the Network Tab on the Inspect window... <br/>where login is not processed and <b>419</b> error code is thrown.</p>
</div>
<br/>
<br/>

<div>
  <img src="https://github.com/shavakkar/ticktokClone/blob/main/IgnoreFolder/sol1.png" />
  <p>This is the Error that I have Encountered....</p>
</div>
<p>Searched solutions for few hours to address the solution... and from a Youtube video, <br/> I proceed adding the <b>"http://localhost:8000"</b> to the routes.</p>
<br/>
<br/>


<div>
  <img src="https://github.com/shavakkar/ticktokClone/blob/main/IgnoreFolder/sol2.png" />
  <p>The Above Solution didn't worked, so I followed the given Suggestion from this Person...<br/></p>
  <p>Added the line <b>axios.defaults.withXSRFToken = true;</b> as the original code is bit different from what I had done.</p>
</div>
<br/>
<br/>


<div>
  <img src="https://github.com/shavakkar/ticktokClone/blob/main/IgnoreFolder/sol3.png" />
  <p>This is the code Block that I have mentioned above as shown in comments</p>
</div>
<br/>
<br/>


<div>
  <img src="https://github.com/shavakkar/ticktokClone/blob/main/IgnoreFolder/sol4.png" />
  <p>Now I removed the <b>http://localhost:8000</b> from the routes and uncommented the XSRFToken and it resolved the issue...</p>
</div>
<br/>
<br/>


<div>
  <img src="https://github.com/shavakkar/ticktokClone/blob/main/IgnoreFolder/sol5.png" />
  <p>The Login Works fine with providing the Credentials...</p>
</div>
<br/>
<br/>


<div>
  <img src="https://github.com/shavakkar/ticktokClone/blob/main/IgnoreFolder/sol6.png" />
  <p>Under Preview... the Credentials can be seen...</p><br/>
  <p>email: test@gmail.com</p><br/>
  <p>password: testtest</p><br/>
</div>
<br/>
<br/>
