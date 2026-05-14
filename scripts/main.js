const projects = {
  robot: {
    tag: 'Combat Robotics',
    title: 'Antweight Combat Robot',
    desc: 'A 1lb combat robot designed and fabricated from scratch for competitive robotics. Every gram was accounted for — the chassis, weapon bracket, and drivetrain were all designed in Onshape and iterated through multiple revisions.',
    bullets: [
      'Full chassis and sub-assembly modeled in Onshape',
      'Aluminum and HDPE construction optimized for the 1lb weight class',
      'Custom weapon mount and motor bracket designed for quick field repair',
    ],
    tools: ['Onshape', 'CAD', 'Aluminum Fabrication', 'HDPE', 'Combat Robotics'],
  },
  prosthetic: {
    tag: 'Biomedical',
    title: 'Prosthetic Hand Subsystem',
    desc: 'Designed a functional actuation subsystem for an assistive prosthetic hand. The focus was on mechanism kinematics — achieving a natural grip motion with minimal actuation force and a compact, printable form factor.',
    bullets: [
      'Four-bar linkage mechanism for coordinated finger actuation',
      'Designed for FDM printability with minimal post-processing',
      'Iterated through three prototypes to refine grip range and force',
    ],
    tools: ['CAD', 'Mechanism Design', 'Four-Bar Linkage', 'FDM Prototyping'],
  },
  radar: {
    tag: 'Embedded Systems',
    title: 'Arduino Radar Visualizer',
    desc: 'Built a real-time radar scanner using an HC-SR04 ultrasonic sensor mounted on a servo motor. The Arduino sweeps 0–180° and streams angle/distance data over serial to a custom Processing sketch that renders a live polar display.',
    bullets: [
      'Servo sweeps 180° while HC-SR04 captures distance at each step',
      'Processing sketch renders live sweep with echo dots on a polar grid',
      'Color-coded proximity zones: green → yellow → red by distance threshold',
    ],
    tools: ['Arduino', 'C++', 'Processing', 'HC-SR04', 'Servo Motor', 'Serial Comms'],
  },
};

const overlay   = document.getElementById('modal-overlay');
const modalTag  = document.getElementById('modal-tag');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalBullets = document.getElementById('modal-bullets');
const modalTools   = document.getElementById('modal-tools');

function openModal(key) {
  const p = projects[key];
  modalTag.textContent   = p.tag;
  modalTitle.textContent = p.title;
  modalDesc.textContent  = p.desc;
  modalBullets.innerHTML = p.bullets.map(b => `<li>${b}</li>`).join('');
  modalTools.innerHTML   = p.tools.map(t => `<span>${t}</span>`).join('');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});

document.getElementById('modal-close').addEventListener('click', closeModal);

overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
