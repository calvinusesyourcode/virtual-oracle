import Page from '@/components/page'
import Section from '@/components/section'
import { useEffect } from 'react'

export default function Story() {
	useEffect(() => {
		const button1 = document.getElementById("button1");
		const button2 = document.getElementById("button2");

		// Initially hide button2 and show button1
		if (button1 && button2) {
			button1.style.display = "block";
			button2.style.display = "none";

			button1?.addEventListener("click", () => {
				Notification.requestPermission().then(perm => {
					if (perm === "granted") {
						new Notification("Success!", {tag:"0001"});
						
						// Hide button1 and show button2
						button1.style.display = "none";
						button2.style.display = "block";
					} else {
						alert("Notifications not allowed... :(");
					}
				})
			});

			button2?.addEventListener("click", () => {
				new Notification((Math.random()*100).toString(), {tag:"0001"});
			});
		}
	}, []);

	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold'>Story</h2>
				<button id="button1" className="rounded p-2 m-2 bg-black text-slate-100">Notification request</button>
				<button id="button2" className="rounded p-2 m-2 bg-black text-slate-100">Notify</button>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					&quot;I confess that when this all started, you were like a picture
					out of focus to me. And it took time for my eyes to adjust to you, to
					make sense of you, to really recognize you.&quot;
				</p>

				<br />

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://twosentencestories.com/vision' className='underline'>
						Vision
					</a>
					, a two sentence story
				</p>
			</div>
		</Section>
	</Page>

	)
}
