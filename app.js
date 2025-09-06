// ZEN-MIND Application JavaScript with Enhanced Features

// Application data and configuration
const appConfig = {
  adminCredentials: {
    username: "Admin",
    password: "admin@1234"
  },
  welcomeMessages: {
    therapist: "Welcome to ZEN-MIND! Your professional profile has been created successfully. You're now part of our network helping teenagers with their mental health journey.",
    teenager: "Welcome to ZEN-MIND! Your account has been created. You now have access to our AI chatbot and can connect with professional therapists whenever you need support.",
    admin: "Admin access granted. You have full system privileges."
  },
  sampleTherapists: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      qualification: "Ph.D. Clinical Psychology",
      experience: "8 years",
      mobile: "+1 (555) 123-4567",
      residentialAddress: "123 Maple Street, Springfield, IL 62701",
      hospitalAddress: "Springfield General Hospital",
      hospitalName: "Springfield General Hospital",
      email: "dr.sarah@zenmindhealthcare.com",
      whatsapp: "+1 (555) 123-4567",
      profilePicture: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
      availableSlots: [
        "Monday 9:00 AM - 5:00 PM",
        "Tuesday 10:00 AM - 6:00 PM", 
        "Wednesday 9:00 AM - 5:00 PM",
        "Friday 2:00 PM - 8:00 PM"
      ],
      specializations: ["Anxiety Disorders", "Depression", "Teen Therapy"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      qualification: "MD Psychiatry",
      experience: "12 years",
      mobile: "+1 (555) 987-6543",
      residentialAddress: "789 Pine Road, Springfield, IL 62703",
      hospitalAddress: "Riverside Medical Center",
      hospitalName: "Riverside Medical Center",
      email: "dr.chen@zenmindhealthcare.com",
      whatsapp: "+1 (555) 987-6543",
      profilePicture: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
      availableSlots: [
        "Monday 11:00 AM - 7:00 PM",
        "Thursday 9:00 AM - 5:00 PM",
        "Friday 10:00 AM - 6:00 PM",
        "Saturday 9:00 AM - 1:00 PM"
      ],
      specializations: ["ADHD", "Mood Disorders", "Family Therapy"]
    }
  ]
};

// Chatbot responses data
const chatbotResponses = {
  hello: "Hi there! I'm here to provide a safe, supportive space for you. How are you feeling today?",
  hi: "Hello! I'm glad you reached out. How can I support you today?",
  sad: "I'm sorry you're feeling sad. That's a completely valid emotion. Would you like to talk about what's been on your mind, or would you prefer some coping strategies?",
  anxious: "Anxiety can feel overwhelming. Let's try a quick breathing exercise: breathe in for 4 counts, hold for 4, and breathe out for 6. Would you like more anxiety management techniques?",
  anxiety: "I understand anxiety can be really tough. Here are some quick techniques: deep breathing, grounding exercises (name 5 things you can see, 4 you can hear, 3 you can touch), and gentle movement. Would you like me to guide you through any of these?",
  depressed: "I hear that you're going through a difficult time. Depression can make everything feel overwhelming. Please remember that what you're feeling is valid, and you don't have to go through this alone. Have you been able to talk to anyone about how you're feeling?",
  depression: "Depression affects many teens, and seeking support shows real strength. Some things that can help include maintaining a routine, gentle exercise, connecting with supportive people, and professional help. Would you like to explore any of these options?",
  stressed: "Stress is something many teens experience. Some helpful strategies include: breaking tasks into smaller steps, practicing mindfulness, talking to someone you trust, and making time for activities you enjoy. What's been causing you the most stress lately?",
  help: "I'm here to help! You can talk to me about how you're feeling, ask for coping strategies, or get information about professional resources. Remember, if you're in crisis, please contact 988 (Suicide & Crisis Lifeline) immediately.",
  crisis: "I'm concerned about what you've shared. Please reach out to a crisis counselor immediately at 988 or text HOME to 741741. You matter, and help is available 24/7. Is there a trusted adult you can talk to right now?",
  suicide: "I'm very concerned about you right now. Please contact the Suicide & Crisis Lifeline at 988 immediately or text HOME to 741741. You are important, and there are people who want to help you. Can you reach out to someone right now?",
  hurt: "I'm worried about you. If you're thinking about hurting yourself, please call 988 right away. If you're dealing with emotional pain, that's valid too, and there are healthy ways to cope. Can you tell me more about what you're experiencing?",
  lonely: "Feeling lonely can be really painful, especially as a teenager. You're not alone in feeling this way - many teens experience loneliness. Some things that might help: joining activities you're interested in, reaching out to one person each day, volunteering, or talking to a counselor. What feels most manageable for you right now?",
  scared: "It's understandable to feel scared sometimes. Fear can be about specific things or just a general feeling. You're brave for reaching out. Can you tell me a bit more about what's making you feel scared? Sometimes talking about it can help.",
  angry: "Anger is a normal emotion, though it can feel intense. Some healthy ways to manage anger include: physical activity, writing in a journal, deep breathing, talking to someone you trust, or creative expression. What usually helps you when you're feeling this way?",
  school: "School stress is really common for teens. Between academic pressure, social dynamics, and planning for the future, it can feel overwhelming. Some strategies that help: breaking assignments into smaller tasks, using a planner, talking to teachers when you need help, and maintaining balance with other activities. What aspect of school is most challenging right now?",
  parents: "Family relationships can be complicated, especially during the teen years. It's normal for there to be some tension as you're growing and becoming more independent. Communication can help, though it's not always easy. Have you been able to talk with your parents about what you're experiencing?",
  friends: "Friendships during the teen years can be intense and complicated. Whether you're dealing with friendship drama, feeling left out, or just growing apart from people, these experiences are part of growing up. What's been happening with your friends?",
  therapy: "Therapy can be really helpful for teens! It provides a safe, confidential space to talk about what you're experiencing with someone trained to help. Many teens find it useful for managing stress, understanding their emotions, and developing coping skills. Would you like information about how to find a therapist?",
  counselor: "School counselors and professional counselors can provide great support. They're trained to help teens navigate challenges and can provide strategies and resources. If you're interested in talking to someone professionally, I can help you think through the next steps.",
  default: "I hear you. It sounds like you're going through something difficult. Remember that your feelings are valid, and it's okay to ask for help. Can you tell me more about what's on your mind? If you need immediate support, please call 988 or text HOME to 741741."
};

// Global state management
class AppState {
  constructor() {
    this.currentUser = null;
    this.isLoggedIn = false;
    this.currentTheme = 'light';
    this.therapists = [];
    this.teenagers = [];
    this.appointments = [];
    this.init();
  }

  init() {
    this.loadFromStorage();
    this.initializeTheme();
  }

  loadFromStorage() {
    // Load users from localStorage
    const therapists = localStorage.getItem('zen-mind-therapists');
    const teenagers = localStorage.getItem('zen-mind-teenagers');
    const currentUser = localStorage.getItem('zen-mind-current-user');
    const appointments = localStorage.getItem('zen-mind-appointments');
    
    this.therapists = therapists ? JSON.parse(therapists) : [...appConfig.sampleTherapists];
    this.teenagers = teenagers ? JSON.parse(teenagers) : [];
    this.appointments = appointments ? JSON.parse(appointments) : [];
    
    if (currentUser) {
      this.currentUser = JSON.parse(currentUser);
      this.isLoggedIn = true;
    }
  }

  saveToStorage() {
    localStorage.setItem('zen-mind-therapists', JSON.stringify(this.therapists));
    localStorage.setItem('zen-mind-teenagers', JSON.stringify(this.teenagers));
    localStorage.setItem('zen-mind-appointments', JSON.stringify(this.appointments));
    if (this.currentUser) {
      localStorage.setItem('zen-mind-current-user', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('zen-mind-current-user');
    }
  }

  initializeTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.currentTheme = 'dark';
    }
    
    const savedTheme = localStorage.getItem('zen-mind-theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
    
    this.applyTheme(this.currentTheme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
    this.currentTheme = theme;
    this.updateThemeIcon();
    localStorage.setItem('zen-mind-theme', theme);
  }

  updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  login(user) {
    this.currentUser = user;
    this.isLoggedIn = true;
    this.saveToStorage();
    this.updateUI();
  }

  logout() {
    this.currentUser = null;
    this.isLoggedIn = false;
    this.saveToStorage();
    this.updateUI();
  }

  updateUI() {
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const userWelcome = document.getElementById('user-welcome');

    if (this.isLoggedIn && this.currentUser) {
      if (authButtons) authButtons.classList.add('hidden');
      if (userInfo) userInfo.classList.remove('hidden');
      
      let welcomeText = '';
      if (this.currentUser.type === 'admin') {
        welcomeText = 'Welcome, Admin';
      } else if (this.currentUser.type === 'therapist') {
        welcomeText = `Welcome, Dr. ${this.currentUser.name}`;
      } else {
        welcomeText = `Welcome, ${this.currentUser.username}`;
      }
      
      if (userWelcome) userWelcome.textContent = welcomeText;
    } else {
      if (authButtons) authButtons.classList.remove('hidden');
      if (userInfo) userInfo.classList.add('hidden');
    }
  }

  addTherapist(therapistData) {
    const newTherapist = {
      ...therapistData,
      id: Date.now(),
      type: 'therapist'
    };
    this.therapists.push(newTherapist);
    this.saveToStorage();
    return newTherapist;
  }

  addTeenager(teenagerData) {
    const newTeenager = {
      ...teenagerData,
      id: Date.now(),
      type: 'teenager'
    };
    this.teenagers.push(newTeenager);
    this.saveToStorage();
    return newTeenager;
  }

  addAppointment(appointmentData) {
    const newAppointment = {
      ...appointmentData,
      id: Date.now(),
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    this.appointments.push(newAppointment);
    this.saveToStorage();
    return newAppointment;
  }

  updateUserProfile(updatedData) {
    if (this.currentUser.type === 'therapist') {
      const therapistIndex = this.therapists.findIndex(t => t.id === this.currentUser.id);
      if (therapistIndex !== -1) {
        this.therapists[therapistIndex] = { ...this.therapists[therapistIndex], ...updatedData };
        this.currentUser = this.therapists[therapistIndex];
      }
    } else if (this.currentUser.type === 'teenager') {
      const teenagerIndex = this.teenagers.findIndex(t => t.id === this.currentUser.id);
      if (teenagerIndex !== -1) {
        this.teenagers[teenagerIndex] = { ...this.teenagers[teenagerIndex], ...updatedData };
        this.currentUser = this.teenagers[teenagerIndex];
      }
    }
    this.saveToStorage();
  }

  getUserAppointments() {
    if (!this.currentUser) return [];
    return this.appointments.filter(appointment => 
      appointment.userId === this.currentUser.id
    );
  }
}

// Initialize global state
const appState = new AppState();

// Utility functions for DOM manipulation
function showElement(element) {
  if (element) element.classList.remove('hidden');
}

function hideElement(element) {
  if (element) element.classList.add('hidden');
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
  }
}

function hideError(elementId) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.classList.add('hidden');
  }
}

function showSuccess(elementId, message) {
  const successElement = document.getElementById(elementId);
  if (successElement) {
    successElement.textContent = message;
    successElement.classList.remove('hidden');
  }
}

function hideSuccess(elementId) {
  const successElement = document.getElementById(elementId);
  if (successElement) {
    successElement.classList.add('hidden');
  }
}

function clearForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.reset();
  }
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => notification.classList.add('show'), 100);
  
  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.add('hide');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Enhanced Therapist Manager
class TherapistManager {
  constructor() {
    this.selectedTherapist = null;
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Therapist navigation link
    const therapistNavLink = document.querySelector('a[href="#therapist"]');
    if (therapistNavLink) {
      therapistNavLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToTherapistSection();
        setTimeout(() => this.renderTherapists(), 100);
      });
    }
  }

  scrollToTherapistSection() {
    const targetSection = document.querySelector('#therapist');
    if (targetSection) {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = targetSection.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  renderTherapists() {
    const therapistGrid = document.getElementById('therapist-grid');
    const defaultInfo = document.getElementById('default-therapist-info');
    
    if (!therapistGrid || !defaultInfo) return;

    if (appState.therapists.length === 0) {
      therapistGrid.style.display = 'none';
      defaultInfo.style.display = 'block';
      return;
    }

    therapistGrid.style.display = 'grid';
    defaultInfo.style.display = 'none';
    
    therapistGrid.innerHTML = '';
    
    appState.therapists.forEach(therapist => {
      const therapistCard = this.createCompactTherapistCard(therapist);
      therapistGrid.appendChild(therapistCard);
    });
  }

  createCompactTherapistCard(therapist) {
    const card = document.createElement('div');
    card.className = 'therapist-card';
    card.dataset.therapistId = therapist.id;
    
    // Create profile picture element
    const profilePicture = therapist.profilePicture 
      ? `<img src="${therapist.profilePicture}" alt="${therapist.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <div class="profile-fallback" style="display: none;">👩‍⚕️</div>`
      : '<div class="profile-fallback">👩‍⚕️</div>';
    
    card.innerHTML = `
      <div class="therapist-profile-picture">
        ${profilePicture}
      </div>
      <div class="therapist-card__name">${therapist.name}</div>
      <div class="therapist-card__address">${therapist.hospitalAddress}</div>
      <div class="therapist-card__experience">${therapist.experience}</div>
    `;

    // Add click handler for card animation
    card.addEventListener('click', (e) => {
      e.preventDefault();
      this.animateAndShowDetail(therapist, card);
    });

    return card;
  }

  animateAndShowDetail(therapist, card) {
    // Add spinning animation
    card.classList.add('spinning');
    
    // Show detail modal after animation
    setTimeout(() => {
      card.classList.remove('spinning');
      this.showTherapistDetail(therapist);
    }, 800);
  }

  showTherapistDetail(therapist) {
    this.selectedTherapist = therapist;
    const modal = document.getElementById('therapist-detail-modal');
    const nameElement = document.getElementById('detail-therapist-name');
    const contentElement = document.getElementById('therapist-detail-content');
    
    if (nameElement) {
      nameElement.textContent = therapist.name;
    }
    
    if (contentElement) {
      contentElement.innerHTML = `
        <div class="therapist-detail-info">
          <div class="detail-row">
            <div class="detail-label">Qualification:</div>
            <div class="detail-value">${therapist.qualification}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Experience:</div>
            <div class="detail-value">${therapist.experience}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Mobile:</div>
            <div class="detail-value"><a href="tel:${therapist.mobile}">${therapist.mobile}</a></div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email:</div>
            <div class="detail-value"><a href="mailto:${therapist.email}">${therapist.email}</a></div>
          </div>
          <div class="detail-row">
            <div class="detail-label">WhatsApp:</div>
            <div class="detail-value"><a href="https://wa.me/${therapist.whatsapp.replace(/[^\d]/g, '')}" target="_blank">${therapist.whatsapp}</a></div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Hospital:</div>
            <div class="detail-value">${therapist.hospitalAddress}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Residence:</div>
            <div class="detail-value">${therapist.residentialAddress}</div>
          </div>
          ${therapist.specializations ? `
            <div class="detail-row">
              <div class="detail-label">Specializations:</div>
              <div class="detail-value">${therapist.specializations.join(', ')}</div>
            </div>
          ` : ''}
          ${therapist.availableSlots ? `
            <div class="detail-row">
              <div class="detail-label">Available Slots:</div>
              <div class="detail-value">${therapist.availableSlots.join('<br>')}</div>
            </div>
          ` : ''}
        </div>
      `;
    }
    
    showElement(modal);
  }
}

// Appointment Manager
class AppointmentManager {
  constructor() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Appointment modal events
    const appointmentModal = document.getElementById('appointment-modal');
    const closeAppointment = document.getElementById('close-appointment');
    const appointmentForm = document.getElementById('appointment-form');
    
    if (closeAppointment) {
      closeAppointment.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeAppointmentModal();
      });
    }
    
    if (appointmentForm) {
      appointmentForm.addEventListener('submit', (e) => this.handleAppointmentBooking(e));
    }
    
    if (appointmentModal) {
      appointmentModal.addEventListener('click', (e) => {
        if (e.target === appointmentModal) {
          this.closeAppointmentModal();
        }
      });
    }

    // Appointments dashboard events
    const appointmentsBtn = document.getElementById('appointments-btn');
    const appointmentsModal = document.getElementById('appointments-modal');
    const closeAppointments = document.getElementById('close-appointments');
    
    if (appointmentsBtn) {
      appointmentsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openAppointmentsDashboard();
      });
    }
    
    if (closeAppointments) {
      closeAppointments.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeAppointmentsDashboard();
      });
    }
    
    if (appointmentsModal) {
      appointmentsModal.addEventListener('click', (e) => {
        if (e.target === appointmentsModal) {
          this.closeAppointmentsDashboard();
        }
      });
    }

    // Setup event delegation for dynamically created book appointment buttons
    document.addEventListener('click', (e) => {
      if (e.target && e.target.id === 'book-appointment-btn') {
        e.preventDefault();
        this.handleBookAppointmentClick();
      }
    });
  }

  handleBookAppointmentClick() {
    if (appState.isLoggedIn) {
      this.openAppointmentModal();
    } else {
      showNotification('Please login to book an appointment');
      if (window.authManager) {
        authManager.openLoginModal();
      }
    }
  }

  openAppointmentModal() {
    if (!window.therapistManager || !therapistManager.selectedTherapist) {
      showNotification('Please select a therapist first');
      return;
    }

    const modal = document.getElementById('appointment-modal');
    const therapistInfo = document.getElementById('therapist-info');
    const therapist = therapistManager.selectedTherapist;
    
    if (therapistInfo) {
      therapistInfo.innerHTML = `
        <h4>Booking appointment with:</h4>
        <p><strong>${therapist.name}</strong></p>
        <p>${therapist.qualification} - ${therapist.experience}</p>
        <p>${therapist.hospitalAddress}</p>
      `;
    }

    // Set minimum date to today
    const dateInput = document.getElementById('appointment-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }

    // Close therapist detail modal first
    const therapistDetailModal = document.getElementById('therapist-detail-modal');
    if (therapistDetailModal) {
      hideElement(therapistDetailModal);
    }

    hideError('appointment-error');
    hideSuccess('appointment-success');
    showElement(modal);
  }

  closeAppointmentModal() {
    const modal = document.getElementById('appointment-modal');
    hideElement(modal);
    clearForm('appointment-form');
    hideError('appointment-error');
    hideSuccess('appointment-success');
  }

  async handleAppointmentBooking(e) {
    e.preventDefault();
    
    if (!appState.isLoggedIn || !therapistManager.selectedTherapist) {
      showError('appointment-error', 'Please login and select a therapist');
      return;
    }

    const formData = {
      patientName: document.getElementById('patient-name')?.value?.trim(),
      age: document.getElementById('patient-age')?.value,
      mobile: document.getElementById('patient-mobile')?.value?.trim(),
      appointmentDate: document.getElementById('appointment-date')?.value,
      appointmentTime: document.getElementById('appointment-time')?.value,
      address: document.getElementById('patient-address')?.value?.trim()
    };

    // Validate form data
    const errors = this.validateAppointmentForm(formData);
    if (errors.length > 0) {
      showError('appointment-error', errors.join('. '));
      return;
    }

    try {
      const appointmentData = {
        ...formData,
        therapistId: therapistManager.selectedTherapist.id,
        therapistName: therapistManager.selectedTherapist.name,
        userId: appState.currentUser.id,
        userName: appState.currentUser.username || appState.currentUser.name
      };

      const appointment = appState.addAppointment(appointmentData);
      
      showSuccess('appointment-success', 'Appointment booked successfully! You will receive a confirmation shortly.');
      
      setTimeout(() => {
        this.closeAppointmentModal();
        showNotification('Appointment confirmed! Check your appointments dashboard.');
      }, 2000);
      
    } catch (error) {
      showError('appointment-error', 'Failed to book appointment. Please try again.');
      console.error('Appointment booking failed:', error);
    }
  }

  validateAppointmentForm(formData) {
    const errors = [];
    
    // Name validation
    if (!formData.patientName) {
      errors.push('Patient name is required');
    } else if (formData.patientName.length < 2) {
      errors.push('Name must be at least 2 characters');
    }
    
    // Age validation
    if (!formData.age) {
      errors.push('Age is required');
    } else {
      const age = parseInt(formData.age);
      if (age < 13 || age > 19) {
        errors.push('Age must be between 13-19 years');
      }
    }
    
    // Mobile validation
    if (!formData.mobile) {
      errors.push('Mobile number is required');
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.mobile)) {
      errors.push('Please enter a valid mobile number');
    }
    
    // Date validation
    if (!formData.appointmentDate) {
      errors.push('Appointment date is required');
    } else {
      const appointmentDate = new Date(formData.appointmentDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (appointmentDate < today) {
        errors.push('Appointment date cannot be in the past');
      }
    }
    
    // Time validation
    if (!formData.appointmentTime) {
      errors.push('Appointment time is required');
    }
    
    // Address validation
    if (!formData.address) {
      errors.push('Address is required');
    } else if (formData.address.length < 10) {
      errors.push('Please provide a complete address');
    }
    
    return errors;
  }

  openAppointmentsDashboard() {
    if (!appState.isLoggedIn) {
      showNotification('Please login to view appointments');
      return;
    }

    const modal = document.getElementById('appointments-modal');
    const appointmentsList = document.getElementById('appointments-list');
    const userAppointments = appState.getUserAppointments();
    
    if (appointmentsList) {
      if (userAppointments.length === 0) {
        appointmentsList.innerHTML = `
          <div class="empty-appointments">
            <p>No appointments booked yet.</p>
            <p>Book an appointment with a therapist to get started.</p>
          </div>
        `;
      } else {
        appointmentsList.innerHTML = userAppointments.map(appointment => `
          <div class="appointment-item">
            <div class="appointment-header-info">
              <div class="appointment-therapist">${appointment.therapistName}</div>
              <div class="appointment-status ${appointment.status}">${appointment.status}</div>
            </div>
            <div class="appointment-details">
              <div><strong>Date:</strong> ${new Date(appointment.appointmentDate).toLocaleDateString()}</div>
              <div><strong>Time:</strong> ${appointment.appointmentTime}</div>
              <div><strong>Patient:</strong> ${appointment.patientName}</div>
              <div><strong>Age:</strong> ${appointment.age} years</div>
              <div><strong>Mobile:</strong> ${appointment.mobile}</div>
              <div><strong>Address:</strong> ${appointment.address}</div>
            </div>
          </div>
        `).join('');
      }
    }
    
    showElement(modal);
  }

  closeAppointmentsDashboard() {
    const modal = document.getElementById('appointments-modal');
    hideElement(modal);
  }
}

// Authentication Manager
class AuthManager {
  constructor() {
    this.loginModal = document.getElementById('login-modal');
    this.signupModal = document.getElementById('signup-modal');
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Login/Signup button events
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    
    if (loginBtn) {
      loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openLoginModal();
      });
    }
    
    if (signupBtn) {
      signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openSignupModal();
      });
    }
    
    // Modal close events
    const closeLogin = document.getElementById('close-login');
    const closeSignup = document.getElementById('close-signup');
    
    if (closeLogin) {
      closeLogin.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeLoginModal();
      });
    }
    
    if (closeSignup) {
      closeSignup.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeSignupModal();
      });
    }
    
    // Switch between login/signup
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');
    
    if (switchToSignup) {
      switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeLoginModal();
        this.openSignupModal();
      });
    }
    
    if (switchToLogin) {
      switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeSignupModal();
        this.openLoginModal();
      });
    }

    // User type selection
    const selectTherapist = document.getElementById('select-therapist');
    const selectTeenager = document.getElementById('select-teenager');
    
    if (selectTherapist) {
      selectTherapist.addEventListener('click', (e) => {
        e.preventDefault();
        this.selectUserType('therapist');
      });
    }
    
    if (selectTeenager) {
      selectTeenager.addEventListener('click', (e) => {
        e.preventDefault();
        this.selectUserType('teenager');
      });
    }
    
    // Back buttons
    const backToUserType = document.getElementById('back-to-user-type');
    const backToUserTypeTeen = document.getElementById('back-to-user-type-teen');
    
    if (backToUserType) {
      backToUserType.addEventListener('click', (e) => {
        e.preventDefault();
        this.showUserTypeSelection();
      });
    }
    
    if (backToUserTypeTeen) {
      backToUserTypeTeen.addEventListener('click', (e) => {
        e.preventDefault();
        this.showUserTypeSelection();
      });
    }

    // Form submissions
    const loginForm = document.getElementById('login-form');
    const therapistSignupForm = document.getElementById('therapist-signup-form');
    const teenagerSignupForm = document.getElementById('teenager-signup-form');
    
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }
    
    if (therapistSignupForm) {
      therapistSignupForm.addEventListener('submit', (e) => this.handleTherapistSignup(e));
    }
    
    if (teenagerSignupForm) {
      teenagerSignupForm.addEventListener('submit', (e) => this.handleTeenagerSignup(e));
    }

    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleLogout();
      });
    }

    // Close modals when clicking outside
    if (this.loginModal) {
      this.loginModal.addEventListener('click', (e) => {
        if (e.target === this.loginModal) this.closeLoginModal();
      });
    }
    
    if (this.signupModal) {
      this.signupModal.addEventListener('click', (e) => {
        if (e.target === this.signupModal) this.closeSignupModal();
      });
    }
  }

  openLoginModal() {
    showElement(this.loginModal);
    setTimeout(() => {
      const usernameInput = document.getElementById('login-username');
      if (usernameInput) usernameInput.focus();
    }, 100);
  }

  closeLoginModal() {
    hideElement(this.loginModal);
    clearForm('login-form');
    hideError('login-error');
  }

  openSignupModal() {
    showElement(this.signupModal);
    this.showUserTypeSelection();
  }

  closeSignupModal() {
    hideElement(this.signupModal);
    this.showUserTypeSelection();
    clearForm('therapist-signup-form');
    clearForm('teenager-signup-form');
    hideError('signup-error');
    hideSuccess('signup-success');
  }

  showUserTypeSelection() {
    const userTypeSelection = document.getElementById('user-type-selection');
    const therapistForm = document.getElementById('therapist-signup-form');
    const teenagerForm = document.getElementById('teenager-signup-form');
    
    showElement(userTypeSelection);
    hideElement(therapistForm);
    hideElement(teenagerForm);
    
    // Reset button states
    document.querySelectorAll('.user-type-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
  }

  selectUserType(type) {
    const userTypeSelection = document.getElementById('user-type-selection');
    const therapistForm = document.getElementById('therapist-signup-form');
    const teenagerForm = document.getElementById('teenager-signup-form');
    
    // Update button states
    document.querySelectorAll('.user-type-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    
    if (type === 'therapist') {
      const selectTherapist = document.getElementById('select-therapist');
      if (selectTherapist) selectTherapist.classList.add('selected');
      
      hideElement(userTypeSelection);
      showElement(therapistForm);
      
      setTimeout(() => {
        const nameInput = document.getElementById('therapist-name');
        if (nameInput) nameInput.focus();
      }, 100);
    } else {
      const selectTeenager = document.getElementById('select-teenager');
      if (selectTeenager) selectTeenager.classList.add('selected');
      
      hideElement(userTypeSelection);
      showElement(teenagerForm);
      
      setTimeout(() => {
        const usernameInput = document.getElementById('teenager-username');
        if (usernameInput) usernameInput.focus();
      }, 100);
    }
  }

  async handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username')?.value?.trim();
    const password = document.getElementById('login-password')?.value;
    
    if (!username || !password) {
      showError('login-error', 'Please enter both username and password.');
      return;
    }

    // Check admin credentials
    if (username === appConfig.adminCredentials.username && password === appConfig.adminCredentials.password) {
      const adminUser = {
        id: 'admin',
        username: 'Admin',
        type: 'admin'
      };
      
      appState.login(adminUser);
      this.closeLoginModal();
      showNotification(appConfig.welcomeMessages.admin);
      return;
    }

    // Check therapist credentials
    const therapist = appState.therapists.find(t => 
      t.email === username && t.password === password
    );
    
    if (therapist) {
      appState.login(therapist);
      this.closeLoginModal();
      showNotification(`Welcome back, Dr. ${therapist.name}!`);
      return;
    }

    // Check teenager credentials
    const teenager = appState.teenagers.find(t => 
      t.username === username && t.password === password
    );
    
    if (teenager) {
      appState.login(teenager);
      this.closeLoginModal();
      showNotification(`Welcome back, ${teenager.username}!`);
      return;
    }

    showError('login-error', 'Invalid username or password. Please try again.');
  }

  async handleTherapistSignup(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('therapist-name')?.value?.trim(),
      qualification: document.getElementById('therapist-qualification')?.value?.trim(),
      experience: document.getElementById('therapist-experience')?.value?.trim(),
      mobile: document.getElementById('therapist-mobile')?.value?.trim(),
      email: document.getElementById('therapist-email')?.value?.trim(),
      whatsapp: document.getElementById('therapist-whatsapp')?.value?.trim(),
      residentialAddress: document.getElementById('therapist-residential')?.value?.trim(),
      hospitalAddress: document.getElementById('therapist-hospital')?.value?.trim(),
      password: document.getElementById('therapist-password')?.value
    };

    // Validate required fields
    const errors = [];
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        errors.push(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`);
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    // Check for duplicate email
    const existingTherapist = appState.therapists.find(t => t.email === formData.email);
    if (existingTherapist) {
      errors.push('An account with this email already exists');
    }

    if (errors.length > 0) {
      showError('signup-error', errors.join('. '));
      return;
    }

    try {
      const newTherapist = appState.addTherapist(formData);
      appState.login(newTherapist);
      
      showSuccess('signup-success', appConfig.welcomeMessages.therapist);
      
      setTimeout(() => {
        this.closeSignupModal();
        if (window.therapistManager) {
          therapistManager.renderTherapists();
        }
      }, 2000);
      
    } catch (error) {
      showError('signup-error', 'Registration failed. Please try again.');
    }
  }

  async handleTeenagerSignup(e) {
    e.preventDefault();
    
    const formData = {
      username: document.getElementById('teenager-username')?.value?.trim(),
      password: document.getElementById('teenager-password')?.value
    };

    const errors = [];

    // Username validation
    if (!formData.username) {
      errors.push('Username is required');
    } else if (formData.username.length < 3 || formData.username.length > 20) {
      errors.push('Username must be 3-20 characters long');
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
      errors.push('Username can only contain letters and numbers');
    }

    // Password validation
    if (!formData.password) {
      errors.push('Password is required');
    } else if (formData.password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }

    // Check for duplicate username
    const existingTeenager = appState.teenagers.find(t => t.username === formData.username);
    if (existingTeenager) {
      errors.push('Username already exists. Please choose another.');
    }

    if (errors.length > 0) {
      showError('signup-error', errors.join('. '));
      return;
    }

    try {
      const newTeenager = appState.addTeenager(formData);
      appState.login(newTeenager);
      
      showSuccess('signup-success', appConfig.welcomeMessages.teenager);
      
      setTimeout(() => {
        this.closeSignupModal();
      }, 2000);
      
    } catch (error) {
      showError('signup-error', 'Registration failed. Please try again.');
    }
  }

  handleLogout() {
    appState.logout();
    showNotification('You have been logged out successfully.');
  }
}

// Profile Manager
class ProfileManager {
  constructor() {
    this.profileModal = document.getElementById('profile-modal');
    this.setupEventListeners();
  }

  setupEventListeners() {
    const profileBtn = document.getElementById('profile-btn');
    const closeProfile = document.getElementById('close-profile');
    
    if (profileBtn) {
      profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openProfileModal();
      });
    }
    
    if (closeProfile) {
      closeProfile.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeProfileModal();
      });
    }
    
    // Profile form submissions
    const therapistProfileForm = document.getElementById('therapist-profile-form');
    const teenagerProfileForm = document.getElementById('teenager-profile-form');
    
    if (therapistProfileForm) {
      therapistProfileForm.addEventListener('submit', (e) => this.handleTherapistProfileUpdate(e));
    }
    
    if (teenagerProfileForm) {
      teenagerProfileForm.addEventListener('submit', (e) => this.handleTeenagerProfileUpdate(e));
    }
    
    // Close modal when clicking outside
    if (this.profileModal) {
      this.profileModal.addEventListener('click', (e) => {
        if (e.target === this.profileModal) this.closeProfileModal();
      });
    }
  }

  openProfileModal() {
    if (!appState.isLoggedIn || !appState.currentUser) return;

    showElement(this.profileModal);
    
    if (appState.currentUser.type === 'therapist') {
      this.showTherapistProfile();
    } else if (appState.currentUser.type === 'teenager') {
      this.showTeenagerProfile();
    }
  }

  closeProfileModal() {
    hideElement(this.profileModal);
    hideElement(document.getElementById('therapist-profile'));
    hideElement(document.getElementById('teenager-profile'));
    hideSuccess('profile-success');
  }

  showTherapistProfile() {
    const therapistProfile = document.getElementById('therapist-profile');
    const teenagerProfile = document.getElementById('teenager-profile');
    
    showElement(therapistProfile);
    hideElement(teenagerProfile);
    
    const user = appState.currentUser;
    
    // Populate form with current data
    const fields = [
      'name', 'qualification', 'experience', 'mobile', 'email', 
      'whatsapp', 'residential', 'hospital'
    ];
    
    fields.forEach(field => {
      const element = document.getElementById(`profile-therapist-${field}`);
      if (element) {
        const key = field === 'residential' ? 'residentialAddress' : 
                   field === 'hospital' ? 'hospitalAddress' : field;
        element.value = user[key] || '';
      }
    });
  }

  showTeenagerProfile() {
    const therapistProfile = document.getElementById('therapist-profile');
    const teenagerProfile = document.getElementById('teenager-profile');
    
    hideElement(therapistProfile);
    showElement(teenagerProfile);
    
    const user = appState.currentUser;
    
    // Populate form with current data
    const fields = ['username', 'picture', 'mobile', 'address', 'gender'];
    
    fields.forEach(field => {
      const element = document.getElementById(`profile-teenager-${field}`);
      if (element) {
        const key = field === 'picture' ? 'profilePicture' : field;
        element.value = user[key] || '';
      }
    });
  }

  async handleTherapistProfileUpdate(e) {
    e.preventDefault();
    
    const updatedData = {
      name: document.getElementById('profile-therapist-name')?.value?.trim(),
      qualification: document.getElementById('profile-therapist-qualification')?.value?.trim(),
      experience: document.getElementById('profile-therapist-experience')?.value?.trim(),
      mobile: document.getElementById('profile-therapist-mobile')?.value?.trim(),
      email: document.getElementById('profile-therapist-email')?.value?.trim(),
      whatsapp: document.getElementById('profile-therapist-whatsapp')?.value?.trim(),
      residentialAddress: document.getElementById('profile-therapist-residential')?.value?.trim(),
      hospitalAddress: document.getElementById('profile-therapist-hospital')?.value?.trim()
    };

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (updatedData.email && !emailRegex.test(updatedData.email)) {
      showError('profile-error', 'Please enter a valid email address');
      return;
    }

    try {
      appState.updateUserProfile(updatedData);
      appState.updateUI();
      
      showSuccess('profile-success', 'Profile updated successfully!');
      
      // Update therapist display
      if (window.therapistManager) {
        therapistManager.renderTherapists();
      }
      
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  }

  async handleTeenagerProfileUpdate(e) {
    e.preventDefault();
    
    const updatedData = {
      username: document.getElementById('profile-teenager-username')?.value?.trim(),
      profilePicture: document.getElementById('profile-teenager-picture')?.value?.trim(),
      mobile: document.getElementById('profile-teenager-mobile')?.value?.trim(),
      address: document.getElementById('profile-teenager-address')?.value?.trim(),
      gender: document.getElementById('profile-teenager-gender')?.value
    };

    // Username validation
    if (updatedData.username && updatedData.username !== appState.currentUser.username) {
      if (updatedData.username.length < 3 || updatedData.username.length > 20) {
        showError('profile-error', 'Username must be 3-20 characters long');
        return;
      }
      
      if (!/^[a-zA-Z0-9]+$/.test(updatedData.username)) {
        showError('profile-error', 'Username can only contain letters and numbers');
        return;
      }

      // Check for duplicate username
      const existingTeenager = appState.teenagers.find(t => 
        t.username === updatedData.username && t.id !== appState.currentUser.id
      );
      if (existingTeenager) {
        showError('profile-error', 'Username already exists. Please choose another.');
        return;
      }
    }

    try {
      appState.updateUserProfile(updatedData);
      appState.updateUI();
      
      showSuccess('profile-success', 'Profile updated successfully!');
      
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  }
}

// Chat functionality
class ChatBot {
  constructor() {
    this.chatMessages = document.getElementById('chat-messages');
    this.chatInput = document.getElementById('chat-input');
    this.sendBtn = document.getElementById('send-btn');
    this.setupEventListeners();
  }

  setupEventListeners() {
    if (this.sendBtn) {
      this.sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.sendMessage();
      });
    }
    
    if (this.chatInput) {
      this.chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.sendMessage();
        }
      });
    }
  }

  sendMessage() {
    const message = this.chatInput?.value?.trim();
    if (!message) return;

    // Add user message
    this.addMessage(message, 'user');
    this.chatInput.value = '';

    // Generate bot response
    setTimeout(() => {
      const response = this.generateResponse(message);
      this.addMessage(response, 'bot');
    }, 1000);
  }

  addMessage(text, sender) {
    if (!this.chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${text}</p>`;
    
    messageDiv.appendChild(contentDiv);
    this.chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  }

  generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Crisis detection keywords
    const crisisKeywords = ['kill', 'die', 'suicide', 'end it', 'hurt myself', 'self harm', 'overdose', 'can\'t go on'];
    if (crisisKeywords.some(keyword => message.includes(keyword))) {
      return chatbotResponses.crisis;
    }

    // Check for specific keywords and return appropriate responses
    for (const [keyword, response] of Object.entries(chatbotResponses)) {
      if (message.includes(keyword) && keyword !== 'default') {
        return response;
      }
    }

    // Additional contextual responses
    if (message.includes('tired') || message.includes('exhausted')) {
      return "It sounds like you're feeling really drained. Being tired can affect how we handle everything else. Are you getting enough sleep? Sometimes when we're overwhelmed emotionally, it can be physically exhausting too.";
    }

    if (message.includes('overwhelmed')) {
      return "Feeling overwhelmed is a sign that you're dealing with a lot right now. It's okay to take things one step at a time. What's one small thing you could do today to take care of yourself?";
    }

    if (message.includes('nobody understands') || message.includes('no one gets it')) {
      return "It can feel really isolating when you feel like no one understands what you're going through. That feeling is valid, and many teens experience it. Sometimes talking to a counselor who specializes in teen issues can help. They're trained to understand what you're experienced.";
    }

    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm glad I could help. Remember, reaching out takes courage, and you should be proud of yourself for taking that step. Is there anything else you'd like to talk about?";
    }

    // Default response
    return chatbotResponses.default;
  }
}

// Modal management
class ModalManager {
  constructor() {
    this.chatModal = document.getElementById('chat-modal');
    this.emergencyModal = document.getElementById('emergency-modal');
    this.therapistDetailModal = document.getElementById('therapist-detail-modal');
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Chat modal triggers
    const chatBtn = document.getElementById('chat-btn');
    const startChatBtn = document.getElementById('start-chat');
    const closeChatBtn = document.getElementById('close-chat');
    
    if (chatBtn) {
      chatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openChat();
      });
    }
    
    if (startChatBtn) {
      startChatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openChat();
      });
    }
    
    if (closeChatBtn) {
      closeChatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeChat();
      });
    }

    // Emergency modal triggers
    const emergencyBtn = document.querySelector('.emergency-btn');
    const closeEmergencyBtn = document.getElementById('close-emergency');
    
    if (emergencyBtn) {
      emergencyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openEmergency();
      });
    }
    
    if (closeEmergencyBtn) {
      closeEmergencyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeEmergency();
      });
    }

    // Therapist detail modal
    const closeTherapistDetail = document.getElementById('close-therapist-detail');
    if (closeTherapistDetail) {
      closeTherapistDetail.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeTherapistDetail();
      });
    }

    // Close modals when clicking outside
    if (this.chatModal) {
      this.chatModal.addEventListener('click', (e) => {
        if (e.target === this.chatModal) {
          this.closeChat();
        }
      });
    }

    if (this.emergencyModal) {
      this.emergencyModal.addEventListener('click', (e) => {
        if (e.target === this.emergencyModal) {
          this.closeEmergency();
        }
      });
    }

    if (this.therapistDetailModal) {
      this.therapistDetailModal.addEventListener('click', (e) => {
        if (e.target === this.therapistDetailModal) {
          this.closeTherapistDetail();
        }
      });
    }

    // ESC key to close modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeChat();
        this.closeEmergency();
        this.closeTherapistDetail();
      }
    });
  }

  openChat() {
    showElement(this.chatModal);
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
      setTimeout(() => chatInput.focus(), 100);
    }
  }

  closeChat() {
    hideElement(this.chatModal);
  }

  openEmergency() {
    showElement(this.emergencyModal);
  }

  closeEmergency() {
    hideElement(this.emergencyModal);
  }

  closeTherapistDetail() {
    hideElement(this.therapistDetailModal);
  }
}

// Utility functions
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Render therapists if navigating to therapist section
        if (targetId === '#therapist' && window.therapistManager) {
          setTimeout(() => therapistManager.renderTherapists(), 500);
        }
      }
    });
  });
}

function setupScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.feature-card, .stat-card, .community-card, .about-card, .therapist-info, .safety-protocols');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

function setupEmergencyAccess() {
  const phoneLinks = document.querySelectorAll('.crisis-link');
  
  phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const phoneNumber = link.textContent;
      const confirmCall = confirm(`Do you want to call ${phoneNumber}? This will open your phone app.`);
      
      if (!confirmCall) {
        e.preventDefault();
      }
    });
  });
}

// Social media links functionality
function setupSocialLinks() {
  // You can customize these URLs to your actual social media profiles
  const socialLinks = {
    telegram: 'https://t.me/zenmindsupport',
    instagram: 'https://instagram.com/zenmindsupport',
    twitter: 'https://twitter.com/zenmindsupport'
  };

  // Update social media links
  document.addEventListener('click', (e) => {
    if (e.target.closest('.social-link')) {
      e.preventDefault();
      const link = e.target.closest('.social-link');
      const platform = link.getAttribute('href').replace('#', '');
      
      if (socialLinks[platform]) {
        window.open(socialLinks[platform], '_blank');
      } else {
        showNotification(`${platform.charAt(0).toUpperCase() + platform.slice(1)} link coming soon!`);
      }
    }
  });
}

// Global instances
let authManager, profileManager, therapistManager, chatBot, modalManager, appointmentManager;

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  console.log('ZEN-MIND application initializing...');
  
  try {
    // Initialize managers
    authManager = new AuthManager();
    profileManager = new ProfileManager();
    therapistManager = new TherapistManager();
    chatBot = new ChatBot();
    modalManager = new ModalManager();
    appointmentManager = new AppointmentManager();
    
    // Make managers available globally
    window.authManager = authManager;
    window.therapistManager = therapistManager;
    window.appointmentManager = appointmentManager;
    
    // Setup UI components
    setupSmoothScrolling();
    setupScrollAnimations();
    setupEmergencyAccess();
    setupSocialLinks();
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const newTheme = appState.currentTheme === 'light' ? 'dark' : 'light';
        appState.applyTheme(newTheme);
      });
    }
    
    // Initialize UI state
    appState.updateUI();
    
    // Initial render of therapists
    therapistManager.renderTherapists();
    
    console.log('ZEN-MIND application initialized successfully');
  } catch (error) {
    console.error('Error initializing application:', error);
  }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('Page is now visible');
  }
});