var threads=null
var defaultThreads = [
    {
        id: 1,
        title: "Test Thread 1",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
	comments: [
            {
		id:1,
		author: "Stuff",
                date: Date.now(),
                content: "Test"
            },
        ]
 
    },
    {
        id: 2,
        title: "Test Thread 2",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
	comments: [
            {
		id:2,
		author: "Stuff",
                date: Date.now(),
                content: "Test"
            },
        ]

    }
]
function getThread(){
        const data = {"getThread":""};
        const options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };
        console.log("posted to server");
        fetch('https://StrikingHappyPixel.1el680103.repl.co', options)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
	console.log("||||||||||||||||||||||")
	threadMaker(data);
	threads = data
	console.log(threads)
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!")
        })
	console.log(data)
	
	
	return data;
        
}
function makeThread(){
        const data = info;
        const options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };
        console.log("posted to server");
        fetch('https://StrikingHappyPixel.1el680103.repl.co', options)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
	
        })
        .catch((error) => {
        console.error('Error:', error);
        });
	
}

//var threads = getThread()

function postInfo(info) {
        const data = info;
	console.log(data)
        const options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };
        console.log("posted to server");
        fetch('https://StrikingHappyPixel.1el680103.repl.co', options)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}

function threadMaker(threads) {
		var container = document.querySelector('ol');
		for (let thread of threads) {
		console.log(thread)
		console.log("++++++++++++++++++++++++++++++++")
		console.log(threads)
		console.log("))))))))))))))))))))")
		var html = 
		`
		
		<li class="row">
			<a href="thread.html?${thread.id}">
			<h4 class="title">
				${thread.title}
			</h4>
			<h7 class="content">
				${thread.content}
			</h7>
			<div class="bottom">
				<p class="timestamp">
				${new Date(thread.date).toLocaleString()}
				</p>
				

				<p class="comment-count">
				${thread.comments.length} comments
				</p>
			</div>
			</a>
		</li>
		`
		console.log("********************")
		container.insertAdjacentHTML('beforeend', html);
		console.log("@@@@@@@@@@@@@@@@@@@@@@")
		}
		console.log("DONEDONEDONEDONEDONEDONEDONEDONEDONEDONE")
	}