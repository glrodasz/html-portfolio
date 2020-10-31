document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form')

  form.addEventListener('submit', function(event) {
	event.preventDefault()

	const inputs = document.querySelectorAll('input, textarea')

	const data = [...inputs].reduce((prev, cur) => {
		prev[cur.id] =  cur.value
		return prev
	}, {})

	alert(JSON.stringify(data))
  });
});
