const downloads = {
    "downloads": [
      {
        "title": "Department of Civil Engineering",
        "fileInfo": "Lab Facilities",
        "filePath": "https://mits.ac.in/public/uploads/departments/Civil%20Engineering%20Labs.pdf"
      },
      {
        "title": "Department of Chemistry",
        "fileInfo": "Research Facilities",
        "filePath": "https://mits.ac.in/assets/pdf/bsh/Research%20Facilities%20-%20Chemistry.pdf"
      },
      {
        "title": "Department of Physics",
        "fileInfo": "Research Facilities",
        "filePath": "https://mits.ac.in/assets/pdf/bsh/Research%20Facilities%20-%20Physics.pdf"
      },
      {
        "title": "Department of English & Foreign Languages",
        "fileInfo": "Academic Facilities - Department of English & Foreign Languages",
        "filePath": "https://mits.ac.in/assets/pdf/bsh/English%20Department%20Academic%20Facilities%20Lab.pdf"
      },
      {
        "title": "Department of Computer Science & Engineering",
        "fileInfo": "Lab Facilities",
        "filePath": "https://mits.ac.in/public/uploads/departments/CST-labs%20(1).pdf"
      },
      {
        "title": "Department of Computer Science & Technology",
        "fileInfo": "Lab Facilities",
        "filePath": "https://mits.ac.in/public/uploads/departments/CST-Lab.pdf"
      },
      {
        "title": "Department of Computer Science & Engineering- Data Science",
        "fileInfo": "Lab Facilities",
        "filePath": "https://mits.ac.in/public/uploads/departments/DS_Lab%20Softwares.pdf"
      },
      {
        "title": "Department of Electronics & Communication Engineering",
        "fileInfo": "Lab Facilities",
        "filePath": "https://mits.ac.in/public/uploads/departments/labs.pdf"
      },
      {
        "title": "Department of Electrical & Electronics Engineering",
        "fileInfo": "Lab Facilities",
        "filePath": "https://mits.ac.in/department/11#tabb26"
      },
      {
        "title": "Department of Mechanical Engineering",
        "fileInfo": "Lab Facilities",
        "filePath": "https://mits.ac.in/department/8#tabb15"
      },
      {
        "title": "Department of Management Studies",
        "fileInfo": "Lab Facilities",
        "filePath": "https://mits.ac.in/public/uploads/departments/MBALAB.pdf"
      }
    ]
  };
  
  const downloadList = document.querySelector('.download-list');
  
  downloads.downloads.forEach(download => {
    const downloadItem = document.createElement('div');
    downloadItem.classList.add('download-item');
    downloadItem.setAttribute('tabindex', '0');
  
    const downloadHeader = document.createElement('div');
    downloadHeader.classList.add('download-header');
  
    const downloadTitle = document.createElement('div');
    downloadTitle.classList.add('download-title');
    downloadTitle.innerHTML = `<span>${download.title}</span>`;
  
    const downloadArrow = document.createElement('span');
    downloadArrow.classList.add('download-arrow');
  
    downloadHeader.appendChild(downloadTitle);
    downloadHeader.appendChild(downloadArrow);
  
    const downloadContent = document.createElement('div');
    downloadContent.classList.add('download-content');
  
    const downloadDetails = document.createElement('div');
    downloadDetails.classList.add('download-details');
    downloadDetails.innerHTML = `
      <p class="file-info">${download.fileInfo}</p>
      <a href="${download.filePath}" class="download-btn" download>Download</a>
    `;
  
    downloadContent.appendChild(downloadDetails);
    downloadItem.appendChild(downloadHeader);
    downloadItem.appendChild(downloadContent);
    downloadList.appendChild(downloadItem);
  });