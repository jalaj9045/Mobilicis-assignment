// code for counter number
$(".counter").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 60000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

// =============Switch language==========
document.addEventListener("DOMContentLoaded", function () {
  const langSelect = document.getElementById("lang");

  const translations = {
    English: {
      hero: {
        heading: "Unlock Your Career Potential with Quickjobs",
        description:
          "Find your dream job with QuickJobs. Explore thousands of opportunities, connect with top employers, and take the next step in your career journey today.",
        smallDesc: "People search this portal every day.",
      },
      navbar: {
        home: "Home",
        about: "About Us",
        jobs: "Jobs",
        contact: "Contact Us",
      },
      about: {
        heading: "About Us",
        description:
          "Empowering careers, one click at a time. Quickjobs - your gateway to success.",
        details:
          "At QuickJobs, we're dedicated to connecting job seekers with their ideal career opportunities. With our user-friendly platform and comprehensive job listings, we strive to simplify the job search process and empower individuals to achieve their professional aspirations.",
        points:
          "<li><i class='fa-solid fa-check-to-slot'></i> Simplified Job Search</li><li><i class='fa-solid fa-check-to-slot'></i> User-Friendly Interface</li>",
        points2:
          "<li><i class='fa-solid fa-check-to-slot'></i> Diverse Opportunities</li><li><i class='fa-solid fa-check-to-slot'></i> Career Advancement</li>",
      },

      footer: {
        footerdesc:
          "Explore endless career possibilities with QuickJobs. Stay updated on job listings, industry trends, and expert tips for career advancement. Join our community today and embark on a journey towards fulfilling your professional aspirations.",
      },
    },
    Japanese: {
      hero: {
        heading: "クイックジョブでキャリアの可能性を開放しましょう",
        description:
          "QuickJobsで夢の仕事を見つけましょう。数千の機会を探索し、トップの雇用主とつながり、今日キャリアの旅路を進めましょう。",
        smallDesc: "人々は毎日このポータルを検索しています。",
      },
      navbar: {
        home: "ホーム",
        about: "会社情報",
        jobs: "仕事",
        contact: "連絡先",
      },
      about: {
        heading: "私たちについて",
        description:
          "一度のクリックでキャリアを力強く支援します。Quickjobs - 成功への道。",
        details:
          "QuickJobsでは、求職者が理想のキャリア機会につながるのに専念しています。ユーザーフレンドリーなプラットフォームと包括的な求人リストで、求職プロセスを簡素化し、個人がプロの夢を実現するのを支援します。",
        points:
          "<li><i class='fa-solid fa-check-to-slot'></i> 簡素化された求人検索</li><li><i class='fa-solid fa-check-to-slot'></i> ユーザーフレンドリーなインターフェース</li>",
        points2:
          "<li><i class='fa-solid fa-check-to-slot'></i> 多様な機会</li><li><i class='fa-solid fa-check-to-slot'></i> キャリアの発展</li>",
      },
      footer: {
        footerdesc:
          "QuickJobs で無限のキャリアの可能性を探ってください。 求人情報、業界のトレンド、キャリアアップのための専門家のヒントなどの最新情報を入手してください。 今すぐ私たちのコミュニティに参加して、職業上の願望を実現するための旅に乗り出しましょう。",
      },
    },
  };

  const heroHeading = document.getElementById("hero-heading");
  const heroDescription = document.getElementById("hero-description");
  const herosmalldesc = document.getElementById("herosmalldesc");
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const jobsLink = document.getElementById("jobs-link");
  const contactLink = document.getElementById("contact-link");
  const aboutHeading = document.getElementById("about-heading");
  const aboutDescription = document.getElementById("about-description");
  const aboutDetails = document.getElementById("about-details");
  const aboutPoints = document.getElementById("about-points");
  const aboutPoints2 = document.getElementById("about-points2");
  const footerpera = document.getElementById("footerdesc");

  const switchLanguage = function () {
    const selectedLanguage = langSelect.value;
    const translation = translations[selectedLanguage];

    // Update hero section
    heroHeading.textContent = translation.hero.heading;
    heroDescription.textContent = translation.hero.description;
    herosmalldesc.textContent = translation.hero.smallDesc;

    // Update navbar links
    homeLink.textContent = translation.navbar.home;
    aboutLink.textContent = translation.navbar.about;
    jobsLink.textContent = translation.navbar.jobs;
    contactLink.textContent = translation.navbar.contact;

    // Update about section
    aboutHeading.textContent = translation.about.heading;
    aboutDescription.textContent = translation.about.description;
    aboutDetails.textContent = translation.about.details;
    aboutPoints.innerHTML = translation.about.points;
    aboutPoints2.innerHTML = translation.about.points2;

    // footer content
    footerpera.textContent = translation.footer.footerdesc;
  };

  // Initial call to switch language
  switchLanguage();

  // Event listener for language change
  langSelect.addEventListener("change", switchLanguage);
});

// Fetch data from the API
fetch("https://apis.camillerakoto.fr/fakejobs/jobs")
  .then((response) => response.json())
  .then((data) => {
    // Render the fetched data
    const jobsContainer = document.getElementById("jobsContainer");

    // Loop through each job and create HTML elements
    data.forEach((job) => {
      const jobDiv = document.createElement("div");
      jobDiv.classList.add("job");

      // Populate the job div with data
      jobDiv.innerHTML = `
      <div class="jobcard">
      <div class="card-body">
      <div class="d-flex justify-content-between ">
      <div>
      <h5 class="fontset">${job.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><i
      class="fa-regular fa-envelope fontset"></i> ${job.author}</h6>
      </div>
      <img src=${job.logo} class="companylogo" alt="">
                 
              </div>
              <hr>
              <div class="job-discription mb-4">
                  <ul>
                      <li>
                          <p ><span class="text-dark">Salary: ${job.salary} /</span> Per month</p>
                      </li>
                      <li>
                          <p><span class="text-dark">City:</span> ${job.city}</p>
                      </li>
                      <li>
                          <p><span class="text-dark">Deadline:</span> ${job.date}</p>
                      </li>
                      <li>
                          <p><span class="text-dark">Fulltime:</span> ${job.fulltime}</p>
                      </li>
                  </ul>
              </div>
              <a href="" class="mainbtn">Apply Now</a>
          </div>
      </div>

      `;

      // Append the job div to the container
      jobsContainer.appendChild(jobDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Function to render job cards based on search query
function renderJobs(data, searchQuery) {
  const jobsContainer = document.getElementById("jobsContainer");
  jobsContainer.innerHTML = ""; // Clear previous content

  data.forEach((job) => {
    // Check if job title contains the search query (case insensitive)
    if (job.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      const jobDiv = document.createElement("div");
      jobDiv.classList.add("jobcard");

      // Populate the job card HTML
      jobDiv.innerHTML = `

      <div class="card-body">
      <div class="d-flex justify-content-between ">
      <div>
      <h5 class="fontset">${job.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><i
      class="fa-regular fa-envelope fontset"></i> ${job.author}</h6>
      </div>
      <img src=${job.logo} class="companylogo" alt="">
                 
              </div>
              <hr>
              <div class="job-discription mb-4">
                  <ul>
                      <li>
                          <p ><span class="text-dark">Salary: ${job.salary} /</span> Per month</p>
                      </li>
                      <li>
                          <p><span class="text-dark">City:</span> ${job.city}</p>
                      </li>
                      <li>
                          <p><span class="text-dark">Deadline:</span> ${job.date}</p>
                      </li>
                      <li>
                          <p><span class="text-dark">Fulltime:</span> ${job.fulltime}</p>
                      </li>
                  </ul>
              </div>
              <a href="" class="mainbtn">Apply Now</a>
          </div>

      `;

      // Append the job card to the container
      jobsContainer.appendChild(jobDiv);
    }
  });
}

// Fetch data from the API and render initial job cards
fetch("https://apis.camillerakoto.fr/fakejobs/jobs")
  .then((response) => response.json())
  .then((data) => {
    renderJobs(data, ""); // Initial render with no search query

    // Event listener for form submission (search)
    document
      .getElementById("searchForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const searchInput = document.getElementById("searchInput").value.trim();
        renderJobs(data, searchInput); // Render jobs based on search input
      });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
