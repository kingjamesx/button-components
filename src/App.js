import Button from './Button'
function App() {
  return (
    <div className='flex gap-5 flex-col'>
    {/* /section1 */}
      <section >
        <Button/>
      </section>
      {/* section2 */}
      <section>
       <Button variant='outline'/>
      </section>
      {/* section 3 */}
      <section>
      <Button variant='text'/>
      </section>
      {/* section 4 */}
      <section>
      <Button disableShadow/>
      </section>
      <section className='flex gap-10 flex-row'>
      <Button disabled/>
      <Button variant='dtext'/>
      </section>
      {/* section 5 */}
      <section className='flex gap-10 flex-row'>
      <Button startIcon='local_grocery_store' />
      <Button endIcon='local_grocery_store' />

      </section>
      {/* section 6 */}
      <section className='flex gap-10 flex-row'>
      <Button size='sm'/>
        <Button size='md'/>
        <Button size='lg'/>
      </section>
      {/* section 6 */}
      <section className='flex gap-10 flex-row'>
      <Button color='default'/>
        <Button color='primary'/>
        <Button color='secondary'/>
        <Button color='danger'/>
      </section>
      <footer className='bg-blue text-center text-white'>&copy; James uyi</footer>
    </div>
  );
}

export default App;
