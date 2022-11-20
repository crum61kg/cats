

const $wr = document.querySelector('[data-wr]')


const blankPost = (id)  => ({
	favourite: false,
	img_link: null,
	name: `Новый пост ${id}`,
	description: '',
	rate: 0,
	id
})

const generateCardHTML = (post) => {

	function isFavourite() {
		if (post.favourite) 
			return "❤️"
		else return ''
	}

	const htmlcard = `
	<div id='post_card_${post.id}' class="card my-2" style="width: 18rem">
		<img class="card-img-top" src="${post.img_link ?? 	''}" alt="Card image cap">
		<div class="card-body">
			<h5 class="card-title">${post.name} ${isFavourite()}</h5>
			<p class="card-text">
				${post.description}
			</p>
			<p>Рейтинг: ${post.rate}/10</p>
			<input type="button" id="buttonEditCard_${post.id}" value="Изменить">
			<input type="button" id="buttonDeleteCard_${post.id}" value="Удалить">
		</div>
	</div>
	`
	$wr.insertAdjacentHTML('afterbegin', htmlcard)

	document.getElementById(`buttonDeleteCard_${post.id}`).onclick = () => deletePost(post)
	document.getElementById(`buttonEditCard_${post.id}`).onclick = () => editPost(post)


}

// функции для обработки кнопок эдит и делете
function editPost(post) {

	console.log('edit', post)
}

function deletePost(post) {

	console.log('delete', post)

}

fetch('http://sb-cats.herokuapp.com/api/2/crum61kg/show')
	.then(response => response.json())
	.then(json => {
		console.log(json)
		json.data.forEach((post) => generateCardHTML(post))
	})


// new card 



buttonNewCard.onclick = function () {
	const cards = document.querySelectorAll('.card')
	const cardIds = [...cards.values()].map(node => +node.id.replace('post_card_', '')).sort((a, b) => b - a)
	const postId = cardIds[0] + 1
	const newPost = blankPost(postId)
	generateCardHTML(newPost)
};

// delete Card

//









