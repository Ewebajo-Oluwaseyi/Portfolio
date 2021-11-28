import React, { useEffect, useRef } from 'react'
import '../css/about.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;

        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
            },
          });
          
          tl.from(".skill1", { x: 400, opacity: 0, duration: 1.5 })
            .from(".skill2", { x: 400, opacity: 0, duration: 1.5 }, "-=1.9")
            .from(".skill3", { x: 400, opacity: 0, duration: 1.5 }, "-=1.8")
            .from(".skill4", { x: 400, opacity: 0, duration: 1.5 }, "-=1.7")
            .from(".skill5", { x: 400, opacity: 0, duration: 1.5 }, "-=1.6")
            .from(".skill6", { x: 400, opacity: 0, duration: 1.5 }, "-=1.")
            .from(".skill7", { x: 400, opacity: 0, duration: 1.5 }, "-=1.7")
            .from(".skill8", { x: 400, opacity: 0, duration: 1.5 }, "-=1.4")
    },[])
    
    return (
        <div className="skill_container" ref={props.refProp}>
             <div className="about_skill">
                    <span className="about_me">MY STACK</span>
                </div>
                <div className="skill_grid" ref={ref}>
                    <div className="skin_item skill1">
                        <div className="image_box">
                            <i class="fab fa-html5 fa-4x"></i>
                        </div>
                        <p className="text">HTML5</p>
                    </div>
                    <div className="skin_item skill2">
                        <div className="image_box">
                            <i class="fab fa-css3"></i>
                        </div>
                        <p className="text">CSS3</p>
                    </div>
                    <div className="skin_item skill3">
                        <div className="image_box">
                            <i class="fab fa-bootstrap"></i>
                        </div>
                        <p className="text">JAVASCRIPT</p>
                    </div>
                    <div className="skin_item skill4">
                        <div className="image_box">
                            <i class="fab fa-sass"></i>
                        </div>
                        <p className="text">SASS</p>
                    </div>
                    <div className="skin_item skill5">
                        <div className="image_box">
                            <i className="fab fa-react"></i>
                        </div>
                        <p className="text">REACT JS</p>
                    </div>
                    <div className="skin_item skill6">
                        <div className="image_box">
                            <i className="fab fa-vuejs"></i>
                        </div>
                        <p className="text">VUE JS</p>
                    </div>
                    <div className="skin_item skill7">
                        <div className="image_box">
                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHJlY3QgeD0iNiIgeT0iNiIgdHJhbnNmb3JtPSJzY2FsZSgzLjU4MzMzLDMuNTgzMzMpIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9IiMxMTk5OGUiPjwvcmVjdD48cGF0aCBkPSJNOTguNTA1ODMsNzguODMzMzNoLTQ3LjUyNTc1djExLjY5NmgxNy4wNDU5MnY1Mi44MDRoMTMuNTA1NTh2LTUyLjgwNGgxNi45NzQyNXoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMTQwLjQ0NTE3LDkzLjQ2NzY3YzAsMCAtNi40MDM0MiwtNC4yNzEzMyAtMTMuNjQxNzUsLTQuMjcxMzNjLTcuMjM4MzMsMCAtOS44NDM0MiwzLjQ0IC05Ljg0MzQyLDcuMTE2NWMwLDkuNDg4NjcgMjYuNDQ4NTgsOC41MzkwOCAyNi40NDg1OCwyNy42MzQ2N2MwLDI5LjQxNTU4IC00MC4zMjY4MywxNi4zNjg2NyAtNDAuMzI2ODMsMTYuMzY4Njd2LTE0LjExMTE3YzAsMCA3LjcxMTMzLDUuODEyMTcgMTYuOTU5OTIsNS44MTIxN2M5LjI0ODU4LDAgOC44OTc0MiwtNi4wNDg2NyA4Ljg5NzQyLC02Ljg4YzAsLTguNzc1NTggLTI2LjIxMjA4LC04Ljc3NTU4IC0yNi4yMTIwOCwtMjguMjI5NWMwLC0yNi40NDg1OCAzOC4xOTExNywtMTYuMDEzOTIgMzguMTkxMTcsLTE2LjAxMzkyeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
                        </div>
                        <p className="text">TYPESCRIPT</p>
                    </div>
                    <div className="skin_item skill8">
                        <div className="image_box">
                        <i className="fab fa-node-js"></i>
                    </div>
                        <p className="text">NODE JS</p>
                    </div>
                </div>
                <div className="divisor"></div>
        </div>
    )
}

export default Skills