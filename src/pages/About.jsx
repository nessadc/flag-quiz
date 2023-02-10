function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Flags of the World Quiz</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app that tests a user's knowledge of the flags of the world.
        This was built to supplement the knowledge learned from{' '}
        <strong>
          <a href='https://traversymedia.com'> Brad Taversy's</a>
        </strong>{' '}
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          React Front to Back
        </a>{' '}
        Udemy course.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
    </>
  );
}

export default About;
