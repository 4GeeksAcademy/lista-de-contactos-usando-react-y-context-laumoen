import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container border rounded px-0">
			
			{/*first contact*/}
			<div className="mx-5 mt-4 d-flex align-items-stretch">
				<div>
					<img src="https://st.depositphotos.com/46542440/55685/i/450/depositphotos_556850760-stock-illustration-square-face-character-stiff-art.jpg" alt="Mike Anamendolla" className="rounded-circle me-5 img-fluid img-thumbnail"/>
				</div>
				<div>
					<p><strong>Mike Anamendolla</strong></p>
					<p className="text-secondary"><i class="fa-solid fa-location-dot"></i> 5842 Hillcrest Rd</p>
					<p className="text-secondary"><i class="fa-solid fa-phone"></i> (870) 288-4149</p>
					<p className="text-secondary"><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>
				</div>
				<div className="icons">
					<ul class="nav nav-link d-flex">
            			<li class="nav-item">
                			<a href="#" class="nav-link active text-dark link-dark"><i class="fa-solid fa-pencil"></i></a>
            			</li>
            			<li class="nav-item">
                			<a href="#" class="nav-link text-dark link-dark"><i class="fa-solid fa-trash-can"></i></a>
            			</li>
        			</ul>
				</div>
			</div>
			
			{/*divider*/}
			<hr/>
			
			{/*second contact*/}
			<div className="mx-5 mt-4 d-flex align-items-stretch">
				<div>
					<img src="https://st.depositphotos.com/46542440/55685/i/450/depositphotos_556850760-stock-illustration-square-face-character-stiff-art.jpg" alt="Mike Anamendolla" className="rounded-circle me-5 img-fluid img-thumbnail"/>
				</div>
				<div>
					<p><strong>Mike Anamendolla</strong></p>
					<p className="text-secondary"><i class="fa-solid fa-location-dot"></i> 5842 Hillcrest Rd</p>
					<p className="text-secondary"><i class="fa-solid fa-phone"></i> (870) 288-4149</p>
					<p className="text-secondary"><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>
				</div>
				<div className="icons">
					<ul class="nav nav-link d-flex">
            			<li class="nav-item">
                			<a href="#" class="nav-link active text-dark link-dark"><i class="fa-solid fa-pencil"></i></a>
            			</li>
            			<li class="nav-item">
                			<a href="#" class="nav-link text-dark link-dark"><i class="fa-solid fa-trash-can"></i></a>
            			</li>
        			</ul>
				</div>
			</div>

			{/*divider*/}
			<hr/>
			
			{/*third contact*/}
			<div className="mx-5 mt-4 d-flex align-items-stretch">
				<div>
					<img src="https://st.depositphotos.com/46542440/55685/i/450/depositphotos_556850760-stock-illustration-square-face-character-stiff-art.jpg" alt="Mike Anamendolla" className="rounded-circle me-5 img-fluid img-thumbnail"/>
				</div>
				<div>
					<p><strong>Mike Anamendolla</strong></p>
					<p className="text-secondary"><i class="fa-solid fa-location-dot"></i> 5842 Hillcrest Rd</p>
					<p className="text-secondary"><i class="fa-solid fa-phone"></i> (870) 288-4149</p>
					<p className="text-secondary"><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>
				</div>
				<div className="icons">
					<ul class="nav nav-link d-flex">
            			<li class="nav-item">
                			<a href="#" class="nav-link active text-dark link-dark"><i class="fa-solid fa-pencil"></i></a>
            			</li>
            			<li class="nav-item">
                			<a href="#" class="nav-link text-dark link-dark"><i class="fa-solid fa-trash-can"></i></a>
            			</li>
        			</ul>
				</div>
			</div>

			{/*divider*/}
			<hr/>

			{/*fourth contact*/}
			<div className="mx-5 mt-4 mb-4 d-flex align-items-stretch">
				<div>
					<img src="https://st.depositphotos.com/46542440/55685/i/450/depositphotos_556850760-stock-illustration-square-face-character-stiff-art.jpg" alt="Mike Anamendolla" className="rounded-circle me-5 img-fluid img-thumbnail"/>
				</div>
				<div>
					<p><strong>Mike Anamendolla</strong></p>
					<p className="text-secondary"><i class="fa-solid fa-location-dot"></i> 5842 Hillcrest Rd</p>
					<p className="text-secondary"><i class="fa-solid fa-phone"></i> (870) 288-4149</p>
					<p className="text-secondary"><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>
				</div>
				<div className="icons">
					<ul class="nav nav-link d-flex">
            			<li class="nav-item">
                			<a href="#" class="nav-link active text-dark link-dark"><i class="fa-solid fa-pencil"></i></a>
            			</li>
            			<li class="nav-item">
                			<a href="#" class="nav-link text-dark link-dark"><i class="fa-solid fa-trash-can"></i></a>
            			</li>
        			</ul>
				</div>
			</div>

		</div>
	);
}; 