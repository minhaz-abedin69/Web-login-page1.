@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{

    --bg:#09090f;
    --bg2:#150d27;

    --glass:rgba(255,255,255,.08);

    --border:rgba(255,255,255,.12);

    --text:#ffffff;

    --muted:rgba(255,255,255,.65);

    --primary:#8b5cf6;

    --secondary:#d946ef;

    --success:#10b981;

}

body{

    min-height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

    padding:40px 20px;

    overflow-x:hidden;

    font-family:"Poppins",sans-serif;

    color:var(--text);

    background:
    radial-gradient(circle at top,#7c3aed 0%,transparent 40%),
    radial-gradient(circle at bottom right,#4338ca 0%,transparent 35%),
    linear-gradient(135deg,var(--bg),var(--bg2),#050509);

}

.page{

    width:70%;

}

.container{

    width:100%;

    max-width:900px;

    margin:auto;

}


.header{

    text-align:center;

    margin-bottom:40px;

}

.header h1{

    font-size:42px;

    font-weight:700;

    margin-bottom:10px;

}

.header p{

    color:var(--muted);

    font-size:15px;

}



.card{

    position:relative;

    overflow:hidden;

    border-radius:28px;

    padding:35px;

    border:1px solid var(--border);

    background:var(--glass);

    backdrop-filter:blur(24px);

    box-shadow:

    0 20px 60px rgba(0,0,0,.35),

    inset 0 1px rgba(255,255,255,.08);

}

.card::before{

    content:"";

    position:absolute;

    inset:0;

    border-radius:inherit;

    padding:1px;

    background:

    linear-gradient(

        135deg,

        rgba(255,255,255,.28),

        rgba(255,255,255,0),

        rgba(255,255,255,.18)

    );

    -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);

    -webkit-mask-composite:xor;

    mask-composite:exclude;

    pointer-events:none;

}


.stepper{
    position: relative;
    margin-bottom: 45px;
}

.step-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.step-item{
    display: flex;
    align-items: center;
    gap: 14px;
    position: relative;
    z-index: 2;

}

.step-dot{

    width:46px;

    height:46px;

    border-radius:50%;

    display:flex;

    justify-content:center;

    align-items:center;

    background:rgba(255,255,255,.08);

    border:1px solid rgba(255,255,255,.15);

    transition:.35s;

    font-weight:600;

}

.step-dot.active{

    background:

    linear-gradient(

        135deg,

        var(--secondary),

        var(--primary)

    );

    border-color:transparent;

    box-shadow:

    0 10px 30px rgba(139,92,246,.45);

}

.step-info h4{

    font-size:15px;

    font-weight:600;

}

.step-info small{

    display:block;

    color:var(--muted);

    font-size:12px;

}

.progress-track{

    position:absolute;

    left:24px;

    right:24px;

    top:95px;

    height:5px;

    border-radius:999px;

    background:rgba(255,255,255,.08);

    z-index:1;

}

#progress{

    width:0;

    height:100%;

    border-radius:inherit;

    background:

    linear-gradient(
        90deg,
        #d946ef,
        #8b5cf6,
        #6366f1
    );

    transition:.45s;

}


form{
    position:relative;
    width:100%;
    margin: 80px 0 40px 0;
}

.step{
    display:none;
    animation:fade .35s ease;
}

.step.active{
    display:block;
}

@keyframes fade{

    from{
        opacity:0;
        transform:translateY(20px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}


.field{
    margin-bottom:22px;
}

.field label{

    display:block;

    margin-bottom:10px;

    font-size:14px;

    font-weight:500;

    color:#fff;

}



.input{

    position:relative;

}

.input i:first-child{

    position:absolute;

    left:18px;

    top:50%;

    transform:translateY(-50%);

    color:rgba(255,255,255,.55);

    pointer-events:none;

}

.input input,
.input select{

    width:100%;

    height:58px;

    border-radius:16px;

    border:1px solid rgba(255,255,255,.14);

    background:rgba(255,255,255,.06);

    color:#fff;

    outline:none;

    padding-left:52px;

    padding-right:45px;

    font-size:15px;

    transition:.35s;

}

.input input::placeholder{

    color:rgba(255,255,255,.40);

}

.input input:focus,
.input select:focus{

    border-color:var(--primary);

    background:rgba(255,255,255,.08);

    box-shadow:

    0 0 0 4px rgba(139,92,246,.15);

}

.input select{

    appearance:none;

    cursor:pointer;

}

.input select option{

    background:#1b1b2a;

    color:#fff;

}

.select-icon{

    position:absolute;

    right:18px;

    top:50%;

    transform:translateY(-50%);

    font-size:13px;

    color:rgba(255,255,255,.55);

    pointer-events:none;

}


.checkbox{

    display:flex;

    align-items:flex-start;

    gap:12px;

    margin-top:18px;

}

.checkbox input{

    width:18px;

    height:18px;

    accent-color:var(--primary);

    margin-top:2px;

}

.checkbox label{

    font-size:14px;

    color:rgba(255,255,255,.78);

    line-height:1.6;

}

.checkbox a{

    color:#c084fc;

    text-decoration:none;

}

.checkbox a:hover{

    text-decoration:underline;

}



.error{

    display:none;

    margin-top:8px;

    color:#ff8d8d;

    font-size:12px;

}

.error.show{

    display:block;

}

.review-card{

    padding:22px;

    border-radius:18px;

    background:rgba(255,255,255,.05);

    border:1px solid rgba(255,255,255,.10);

    margin-bottom:25px;

}

.review-card h3{

    margin-bottom:18px;

    font-size:18px;

    font-weight:600;

}

.review-row{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:14px 0;

    border-bottom:1px solid rgba(255,255,255,.08);

}

.review-row:last-child{

    border-bottom:none;

}

.review-row span{

    color:rgba(255,255,255,.60);

}

.review-row strong{

    font-weight:500;

    color:#fff;

}


.form-buttons{

    margin-top:35px;

    display:flex;

    justify-content:space-between;

    align-items:center;

}

.button-group{

    display:flex;

    gap:12px;

}

.form-buttons button{

    border:none;

    cursor:pointer;

    border-radius:14px;

    padding:14px 28px;

    font-size:15px;

    font-weight:600;

    transition:.35s;

}

#backBtn{

    background:rgba(255,255,255,.08);

    color:#fff;

}

#backBtn:hover{

    background:rgba(255,255,255,.15);

}

#backBtn:disabled{

    opacity:.35;

    cursor:not-allowed;

}

#nextBtn,
#submitBtn{

    color:#fff;

    background:
    linear-gradient(
        135deg,
        var(--secondary),
        var(--primary),
        #6366f1
    );

    box-shadow:
    0 15px 35px rgba(139,92,246,.35);

}

#nextBtn:hover,
#submitBtn:hover{

    transform:translateY(-2px);

}

#submitBtn{

    display:none;

}


.success{

    display:none;

    text-align:center;

    padding:30px;
    margin-top: 90px;

    animation:fade .4s ease;

}

.success.show{

    display:block;

}

.success-icon{

    width:80px;

    height:80px;

    margin:0 auto 25px;

    border-radius:50%;

    display:flex;

    justify-content:center;

    align-items:center;

    background:rgba(16,185,129,.18);

    color:var(--success);

    box-shadow:
    0 0 40px rgba(16,185,129,.25);

}

.success-icon svg{

    width:38px;

    height:38px;

}

.success h2{

    font-size:32px;

    font-weight:700;

    margin-bottom:12px;

}

.success p{

    color:rgba(255,255,255,.72);

    font-size:15px;

    line-height:1.6;

}

.footer{

    margin-top:25px;

    text-align:center;

    font-size:13px;

    color:rgba(255,255,255,.45);

}

.hidden{

    display:none !important;

}

.show{

    display:block !important;

}

.fade-in{

    animation:fade .4s ease;

}

.text-center{

    text-align:center;

}


::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-track{

    background:#09090f;

}

::-webkit-scrollbar-thumb{

    background:#5b5b7d;

    border-radius:999px;

}

::-webkit-scrollbar-thumb:hover{

    background:#8b5cf6;

}

@media (max-width:900px){

    .container{

        max-width:700px;

    }

}

@media (max-width:768px){

    body{

        padding:25px 15px;

    }

    .card{

        padding:25px;

        border-radius:22px;

    }

    .header h1{

        font-size:32px;

    }

    .header p{

        font-size:14px;

    }

    .stepper{

        margin-bottom:35px;

    }

    .step-item{

        margin-right:18px;

    }

    .step-info{

        display:none;

    }

    .step-dot{

        width:42px;

        height:42px;

    }

    .progress-track{

        left:20px;

        right:20px;

    }

    .form-buttons{

        flex-direction:column;

        gap:15px;

    }

    .button-group{

        width:100%;

    }

    .button-group button{

        flex:1;

    }

    #backBtn{

        width:100%;

    }

}

@media (max-width:520px){

    .card{

        padding:18px;

    }

    .header{

        margin-bottom:28px;

    }

    .header h1{

        font-size:27px;

    }

    .input input,
    .input select{

        height:54px;

        font-size:14px;

    }

    .review-card{

        padding:18px;

    }

    .review-row{

        flex-direction:column;

        align-items:flex-start;

        gap:6px;

    }

    .step-item{

        margin-right:10px;

    }

    .step-dot{

        width:38px;

        height:38px;

        font-size:14px;

    }

    .success{

        padding:50px 15px;

    }

    .success h2{

        font-size:26px;

    }

    .success-icon{

        width:70px;

        height:70px;

    }

}

@media (max-width:380px){

    .stepper{

        display:flex;

        justify-content:space-between;

    }

    .step-item{

        margin-right:0;

    }

    .progress-track{

        display:none;

    }

    .button-group{

        flex-direction:column;

    }

    #nextBtn,
    #submitBtn{

        width:100%;

    }

}