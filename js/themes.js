const header = document.querySelector('.header')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')
function reverse()
{
	header.style.background = '#3CA55C'
	header.style.transition = '1s'
	main.style.background = '#003973'
	main.style.transition = '1s'
	footer.style.background = '#B5AC49'
	footer.style.transition = '1s' 

}
function unreverse()
{
	header.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(85,195,25,1) 0%, rgba(0,255,252,1) 100%);'
	header.style.transition = '1s'
	main.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(249,13,6,1) 0%, rgba(42,0,255,1) 100%); ;'
	main.style.transition = '1s'
	footer.style.background = 'background:#87CEEB'
	footer.style.transition = '1s' 
	
}
