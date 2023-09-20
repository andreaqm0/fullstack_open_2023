import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>
const Total = ({ sum }) => <strong>total of exercises {sum}</strong>
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>
const Content = ({ parts }) => (
    <>
        {
            parts.map(part => (
                <Part
                    key={part.id}
                    part={part}
                />
            ))
        }
    </>
)

const Course = ({ course }) => {
    const total = course.parts.reduce((acc, obj) => acc + obj.exercises, 0)
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sum={total} />
        </>
    )
}

export default Course