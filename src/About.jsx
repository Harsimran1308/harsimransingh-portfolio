import './About.css'
export default function About() {
	return (
		<div className="about-section">
			<p className="about-header-text">
				About Me
			</p>
			<div id="code">
				<div id="console">
					&gt; Harsimran.region<br />
					<span class="answer">&nbsp;&nbsp;=&gt; "Toronto, ON, Canada"<br /><br /></span>
					&gt; Harsimran.education<br />
					<span class="answer">&nbsp;&nbsp;=&gt; "Masters of Applied Computing @ University of Windsor"<br />&nbsp;&nbsp;=&gt; "Bachelor of Engineering(Computer Science) @ Chitkara University"<br /><br /></span>
					&gt; Harsimran.major<br />
					<span class="answer">&nbsp;&nbsp;=&gt; "Computer Science"<br /><br /></span>
					&gt; Harsimran.skills<br />
					<span class="answer">&nbsp;&nbsp;=&gt; ["React", "Java", "Node", "SQL", "MongoDB", "PHP", "C/C++", "Python", "Cloud Infrastructure"]<br /><br /></span>
					&gt; Harsimran.interests<br />
					<span class="answer">&nbsp;&nbsp;=&gt; ["Code", "Problem Solving", "Design", "Reading"]<br /><br /></span>
					&gt; Harsimran.workExperience<br />
					<span class="answer">&nbsp;&nbsp;=&gt; Latest Work Experience<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; company: "TD Bank - CGI"<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; role: "Software Developer"<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; startDate: "November 2024"<br />
						<br /></span>
					&gt; Harsimran.resume<br />
					<span class="answer">&nbsp;&nbsp;=&gt; "<a target="_blank" href="/HarsimranSingh.pdf" className='link-highlighter'>HarsimranSingh.pdf</a>"<br /><br /></span>
					&gt; Harsimran.socialProfiles<br />
					<span class="answer">&nbsp;&nbsp;=&gt; ["<a target="_blank" href="https://twitter.com/simransingh1308" className='link-highlighter'>twitter@HarsimranSingh</a>",
						"<a target="_blank" href="https://github.com/Harsimran1308" className='link-highlighter'>github@HarsimranSingh</a>",
						"<a target="_blank" href="https://www.linkedin.com/in/harsimran-singh96/" className='link-highlighter'>linkedIn@HarsimranSingh</a>"]<br /><br /></span>
					&gt; Harsimran.email<br />
					<span class="answer">&nbsp;&nbsp;=&gt; "<a target="_blank" href="mailto:harsimran.singh0270@gmail.com" className='link-highlighter'>harsimran.singh0270@gmail.com</a>"<br /><br /></span>
				</div>
			</div>
			<div className='about-bottom'>
			</div>

		</div>
	)
}