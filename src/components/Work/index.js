import {useRef} from 'react';
import {motion, useMotionValueEvent} from 'framer-motion';
import {useScroll, useTransform} from 'framer-motion';
import './style.css';
export default function Work() {
	const targetRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const project2X = useTransform(scrollYProgress, [0.15, 0.3], ['0%', '-100%']);
	const project3X = useTransform(scrollYProgress, [0.35, 0.5], ['0%', '-100%']);
	const project4X = useTransform(scrollYProgress, [0.65, 0.8], ['0%', '-100%']);
	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		console.log(latest);
	});
	return (
		<div className="section-wrapper">
			<section id="work" className="section work" ref={targetRef}>
				<motion.div className="sticky projects">
					<div className="absolute grid h-100 project project-one">
						<div className="project-image-container">
							<div className="image image-one"></div>
							<div className="image image-two"></div>
							<div className="image image-three"></div>
						</div>
						<div className="flex flex-col justify-center project-container">
							<small className="project-index"></small>
							<h1 className="project-title">01.Fictional Typeface</h1>
							<p className="project-desc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
								fuga id corporis officia eum tempora totam, quaerat natus atque
								asperiores laborum cum praesentium aperiam nihil perspiciatis
								voluptas sunt accusantium voluptates.
							</p>
							<div className="project-skills">
								<ul>
									<li>html</li>
									<li>css</li>
									<li>javascript</li>
								</ul>
							</div>
							<div className="project-links">
								<a href="">Github</a>
								<a href="">Live Demo</a>
							</div>
						</div>
					</div>
					<motion.div
						className="absolute grid h-100 project project-two"
						style={{x: project2X}}>
						<div className="project-image-container">
							<div className="image image-one"></div>
							<div className="image image-two"></div>
							<div className="image image-three"></div>
						</div>
						<div className="flex flex-col justify-center project-container">
							<small className="project-index"></small>
							<h1 className="project-title">02.ACNH Plyaer</h1>
							<p className="project-desc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
								fuga id corporis officia eum tempora totam, quaerat natus atque
								asperiores laborum cum praesentium aperiam nihil perspiciatis
								voluptas sunt accusantium voluptates.
							</p>
							<div className="project-skills">
								<ul>
									<li>html</li>
									<li>css</li>
									<li>javascript</li>
								</ul>
							</div>
							<div className="project-links">
								<a href="">Github</a>
								<a href="">Live Demo</a>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="absolute grid h-100 project project-three"
						style={{x: project3X}}>
						<div className="project-image-container">
							<div className="image image-one"></div>
							<div className="image image-two"></div>
							<div className="image image-three"></div>
						</div>
						<div className="flex flex-col justify-center project-container">
							<small className="project-index"></small>
							<h1 className="project-title">03.Wetube</h1>
							<p className="project-desc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
								fuga id corporis officia eum tempora totam, quaerat natus atque
								asperiores laborum cum praesentium aperiam nihil perspiciatis
								voluptas sunt accusantium voluptates.
							</p>
							<div className="project-skills">
								<ul>
									<li>html</li>
									<li>css</li>
									<li>javascript</li>
								</ul>
							</div>
							<div className="project-links">
								<a href="">Github</a>
								<a href="">Live Demo</a>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="absolute grid h-100 project project-four"
						style={{x: project4X}}>
						<div className="project-image-container">
							<div className="image image-one"></div>
							<div className="image image-two"></div>
							<div className="image image-three"></div>
						</div>
						<div className="flex flex-col justify-center project-container">
							<small className="project-index"></small>
							<h1 className="project-title">04.Netflix</h1>
							<p className="project-desc">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
								fuga id corporis officia eum tempora totam, quaerat natus atque
								asperiores laborum cum praesentium aperiam nihil perspiciatis
								voluptas sunt accusantium voluptates.
							</p>
							<div className="project-skills">
								<ul>
									<li>html</li>
									<li>css</li>
									<li>javascript</li>
								</ul>
							</div>
							<div className="project-links">
								<a href="">Github</a>
								<a href="">Live Demo</a>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
}
