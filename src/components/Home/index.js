import {useEffect, useRef, useState} from 'react';
import './style.css';
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';
export default function Home() {
	const [isOverflowHidden, setIsOverflowHidden] = useState(false);
	const cubeRef = useRef(null);
	const targetRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	});
	const rotateXBox = useTransform(scrollYProgress, [0, 0.2], [0, -45]);
	const rotateYBox = useTransform(scrollYProgress, [0, 0.2], [0, -45]);
	const openBox = useTransform(scrollYProgress, [0.2, 0.3], [0, 400]);
	const frameOut = useTransform(scrollYProgress, [0.3, 0.4], [-150, 400]);
	const frameRotateX = useTransform(scrollYProgress, [0.4, 0.5], [90, 45]);
	const frameRotateY = useTransform(scrollYProgress, [0.4, 0.5], [0, 50]);
	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		if (latest > 0.365) {
			setIsOverflowHidden(true);
		} else {
			setIsOverflowHidden(false);
		}
	});
	return (
		<div className="section-wrapper">
			<section id="home" className="section section-1" ref={targetRef}>
				<div className=" h-100 ff-main section-1-container">
					<div className="sticky cube-container">
						<motion.div
							ref={cubeRef}
							className="cube"
							style={{rotateX: rotateXBox, rotateY: rotateYBox}}>
							<div id="front" className="card">
								Front
							</div>
							<div id="back" className="card">
								Back
							</div>
							<div id="left" className="card">
								Left
							</div>
							<div id="right" className="card">
								Right
							</div>
							<motion.div style={{right: openBox}} id="top" className="card">
								Top
							</motion.div>
							<div id="bottom" className="card">
								Bottom
							</div>
							<motion.div
								id="photo-cards"
								className="card"
								style={{
									bottom: frameOut,
									rotateX: frameRotateX,
									rotateY: frameRotateY,
									overflow: isOverflowHidden ? 'inherit' : 'hidden',
								}}>
								<motion.div className="absolute photo-frame frame-1">
									<div className="photo-frame-image"></div>
									<div className="photo-frame-text">My Card1</div>
								</motion.div>

								<motion.div className="absolute photo-frame frame-2">
									<div className="photo-frame-image"></div>
									<div className="photo-frame-text">My Card2</div>
								</motion.div>
								<motion.div className="absolute photo-frame frame-3">
									<div className="photo-frame-image"></div>
									<div className="photo-frame-text">My Card3</div>
								</motion.div>
								<motion.div className="absolute photo-frame frame-4">
									<div className="photo-frame-image"></div>
									<div className="photo-frame-text">My Card4</div>
								</motion.div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>
			<section id="home" className="section section-home">
				Home
			</section>
			<section id="home" className="section section-home">
				Home
			</section>
		</div>
	);
}
