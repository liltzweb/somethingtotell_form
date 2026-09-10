window.FORM_CONFIG = {
  product: {
    code: 'somethingtotell',
    name: 'somethingtotell',
    badge: 'interactive love letter & confession sequence',
    price: 7000,
    priceFormatted: 'Rp 7.000',
    tagline: 'things i've been lowkey wanting to tell you — interactive stepped love confession with animated wax envelope, 2-part romantic letter, 2 interactive polaroids, and confession proposal.'
  },
  context: {
    formCode: 'TELL-ORD',
    edition: '2026 Stepped Confession Edition',
    description: 'Somethingtotell is a heartfelt stepped romantic web gift featuring an interactive wax envelope unsealing animation, a 2-part handwritten confession letter, 2 tap-to-reveal secret polaroid photos, a final confession with dramatic pause, and a proposal question that automatically copies the answer to clipboard and redirects to Telegram.'
  },
  motif: '💌',
  mediaDescription: '2 Foto (Polaroid 01 & Polaroid 02) + 1 File Musik MP3',
  theme: {
    name: 'somethingtotell',
    palette: ['#1E1B18', '#2D2824', '#D4A373', '#FAEDCD', '#E29578', '#6B705C']
  },
  sections: [
    {
      id: 'core_identity',
      number: '02',
      title: 'Core Identity & Telegram Redirection',
      description: 'Names, website title, and Telegram destination link for answer redirection.',
      fields: [
        {
          id: 'website_title',
          label: 'Website Title / Browser Tab Title',
          type: 'text',
          placeholder: 'e.g. things i've been lowkey wanting to tell you.',
          defaultValue: 'things i've been lowkey wanting to tell you.',
          required: true,
          helpText: 'Title shown on the browser tab.'
        },
        {
          id: 'sender_name',
          label: 'Sender Full Name (Pria / Yang Menyatakan Perasaan)',
          type: 'text',
          placeholder: 'e.g. fael',
          defaultValue: 'fael',
          required: true,
          helpText: 'Nama lengkap pengirim.'
        },
        {
          id: 'sender_nickname',
          label: 'Sender Nickname',
          type: 'text',
          placeholder: 'e.g. fael',
          defaultValue: 'fael',
          required: true,
          helpText: 'Nama panggilan pengirim.'
        },
        {
          id: 'recipient_name',
          label: 'Recipient Full Name (Wanita / Pasangan)',
          type: 'text',
          placeholder: 'e.g. amaia luna',
          defaultValue: 'amaia luna',
          required: true,
          helpText: 'Nama lengkap pasangan.'
        },
        {
          id: 'recipient_nickname',
          label: 'Recipient Nickname',
          type: 'text',
          placeholder: 'e.g. amaia',
          defaultValue: 'amaia',
          required: true,
          helpText: 'Nama panggilan pasangan.'
        },
        {
          id: 'chat_link',
          label: 'Telegram Chat Redirection Link',
          type: 'text',
          placeholder: 'e.g. https://t.me/mirssy atau username telegrammu',
          defaultValue: 'https://t.me/mirssy',
          required: true,
          helpText: 'Link Telegram tujuan untuk menerima pesan otomatis saat tombol jawaban diklik.'
        }
      ]
    },
    {
      id: 'screen_1_opening',
      number: '03',
      title: 'Screen 01 — Opening Headline (Cover)',
      description: 'Opening teaser headline and subtext.',
      fields: [
        {
          id: 'open_headline',
          label: 'Opening Headline',
          type: 'textarea',
          placeholder: 'e.g. there's something i've been lowkey wanting to tell you.',
          defaultValue: 'there's something i've been lowkey wanting to tell you.',
          required: true
        },
        {
          id: 'open_subtext',
          label: 'Opening Subtext',
          type: 'textarea',
          placeholder: 'e.g. and honestly every time i try to say it out loud, my brain just completely short circuits.',
          defaultValue: 'and honestly every time i try to say it out loud, my brain just completely short circuits.',
          required: true
        },
        {
          id: 'open_btn_text',
          label: 'Opening Button Label',
          type: 'text',
          placeholder: 'e.g. read what i couldn't say',
          defaultValue: 'read what i couldn't say',
          required: true
        }
      ]
    },
    {
      id: 'screen_2_envelope',
      number: '04',
      title: 'Screen 02 — The Interactive Envelope',
      description: 'Animated wax-sealed envelope with unsealing interaction.',
      fields: [
        {
          id: 'envelope_hint',
          label: 'Envelope Tap Hint',
          type: 'text',
          placeholder: 'e.g. tap to open the envelope',
          defaultValue: 'tap to open the envelope',
          required: true
        },
        {
          id: 'envelope_greeting',
          label: 'Envelope Greeting Tag',
          type: 'text',
          placeholder: 'e.g. to my favorite girl, amaia luna,',
          defaultValue: 'to my favorite girl, amaia luna,',
          required: true
        },
        {
          id: 'envelope_btn_text',
          label: 'Open Letter Button Label',
          type: 'text',
          placeholder: 'e.g. open my letter',
          defaultValue: 'open my letter',
          required: true
        }
      ]
    },
    {
      id: 'screen_3_letter_part1',
      number: '05',
      title: 'Screen 03 — Confession Letter (Part One)',
      description: 'First part of the handwritten love letter.',
      fields: [
        {
          id: 'letter1_salutation',
          label: 'Letter Part 01 Salutation',
          type: 'text',
          placeholder: 'e.g. hey amaia,',
          defaultValue: 'hey amaia,',
          required: true
        },
        {
          id: 'letter1_text',
          label: 'Letter Part 01 Body Text',
          type: 'textarea',
          placeholder: 'e.g. ngl, ever since you came into my life, everything just got so much better...',
          defaultValue: 'ngl, ever since you came into my life, everything just got so much better. at first i thought you were just really cool to talk to, but somewhere along the way you started living in my head completely rent free. from our random late night convos to the little things you do that make me smile like an idiot, you slowly became the best part of my everyday. thank you for just being you and bringing so much warmth into my world.',
          required: true
        },
        {
          id: 'letter1_btn_text',
          label: 'Advance Button Label',
          type: 'text',
          placeholder: 'e.g. keep reading',
          defaultValue: 'keep reading',
          required: true
        }
      ]
    },
    {
      id: 'screen_4_photo_1',
      number: '06',
      title: 'Screen 04 — Polaroid Photo 01 (Interactive Secret)',
      description: 'First polaroid with tap-to-reveal secret confession message.',
      fields: [
        {
          id: 'photo1_instruction',
          label: 'Photo 01 Tap Hint',
          type: 'text',
          placeholder: 'e.g. tap the photo',
          defaultValue: 'tap the photo',
          required: true
        },
        {
          id: 'photo1_caption',
          label: 'Photo 01 Caption',
          type: 'text',
          placeholder: 'e.g. literally you.',
          defaultValue: 'literally you.',
          required: true
        },
        {
          id: 'photo1_message',
          label: 'Photo 01 Revealed Secret Note',
          type: 'textarea',
          placeholder: 'e.g. safe to say i'm completely down bad for you and i don't even care.',
          defaultValue: 'safe to say i'm completely down bad for you and i don't even care.',
          required: true
        },
        {
          id: 'photo1_btn_text',
          label: 'Next Button Label',
          type: 'text',
          placeholder: 'e.g. keep reading',
          defaultValue: 'keep reading',
          required: true
        }
      ]
    },
    {
      id: 'screen_5_letter_part2',
      number: '07',
      title: 'Screen 05 — Confession Letter (Part Two)',
      description: 'Second part of the handwritten love letter with deep promises.',
      fields: [
        {
          id: 'letter2_salutation',
          label: 'Letter Part 02 Salutation',
          type: 'text',
          placeholder: 'e.g. to the prettiest girl in the room,',
          defaultValue: 'to the prettiest girl in the room,',
          required: true
        },
        {
          id: 'letter2_text',
          label: 'Letter Part 02 Body Text',
          type: 'textarea',
          placeholder: 'e.g. i just genuinely love seeing you happy and thriving...',
          defaultValue: 'i just genuinely love seeing you happy and thriving. and on the days when everything feels heavy or overwhelming, i really want to be the person you can always lean on. i might not always have the perfect words or the answers to everything, but i promise i'll always listen, hype you up, and be right by your side no matter what.',
          required: true
        },
        {
          id: 'letter2_btn_text',
          label: 'Next Button Label',
          type: 'text',
          placeholder: 'e.g. one last thing',
          defaultValue: 'one last thing',
          required: true
        }
      ]
    },
    {
      id: 'screen_6_photo_2',
      number: '08',
      title: 'Screen 06 — Polaroid Photo 02 (Interactive Secret)',
      description: 'Second polaroid with core memory message.',
      fields: [
        {
          id: 'photo2_instruction',
          label: 'Photo 02 Tap Hint',
          type: 'text',
          placeholder: 'e.g. there's one more thing i want you to see.',
          defaultValue: 'there's one more thing i want you to see.',
          required: true
        },
        {
          id: 'photo2_caption',
          label: 'Photo 02 Caption',
          type: 'text',
          placeholder: 'e.g. with you.',
          defaultValue: 'with you.',
          required: true
        },
        {
          id: 'photo2_message',
          label: 'Photo 02 Revealed Secret Note',
          type: 'textarea',
          placeholder: 'e.g. every core memory i want to make from now on has you in it.',
          defaultValue: 'every core memory i want to make from now on has you in it.',
          required: true
        },
        {
          id: 'photo2_btn_text',
          label: 'Final Question Button Label',
          type: 'text',
          placeholder: 'e.g. the final question',
          defaultValue: 'the final question',
          required: true
        }
      ]
    },
    {
      id: 'screen_7_final_confession',
      number: '09',
      title: 'Screen 07 — Final Confession & The Big Question',
      description: 'Final confession lead, signature, dramatic pause, proposal question, and answer choices.',
      fields: [
        {
          id: 'final_lead',
          label: 'Final Confession Lead',
          type: 'text',
          placeholder: 'e.g. so after overthinking this for way too long...',
          defaultValue: 'so after overthinking this for way too long...',
          required: true
        },
        {
          id: 'final_text',
          label: 'Final Confession Text',
          type: 'textarea',
          placeholder: 'e.g. i'm finally done holding it in and beating around the bush...',
          defaultValue: 'i'm finally done holding it in and beating around the bush. i just really wanted to be honest with how i feel about you, because you mean the absolute world to me.',
          required: true
        },
        {
          id: 'final_signature',
          label: 'Final Signature',
          type: 'text',
          placeholder: 'e.g. — from fael, who is hopelessly into you',
          defaultValue: '— from fael, who is hopelessly into you',
          required: true
        },
        {
          id: 'final_pause',
          label: 'Dramatic Pause Subtext',
          type: 'text',
          placeholder: 'e.g. so yeah, with all my heart...',
          defaultValue: 'so yeah, with all my heart...',
          required: true
        },
        {
          id: 'final_question',
          label: 'The Final Question',
          type: 'text',
          placeholder: 'e.g. will you be my girlfriend?',
          defaultValue: 'will you be my girlfriend?',
          required: true
        },
        {
          id: 'yes_btn_text',
          label: 'Yes Button Text',
          type: 'text',
          placeholder: 'e.g. yes, of course',
          defaultValue: 'yes, of course',
          required: true
        },
        {
          id: 'yes_copy_value',
          label: 'Yes Clipboard Copy Message',
          type: 'text',
          placeholder: 'e.g. yes, of course',
          defaultValue: 'yes, of course',
          required: true,
          helpText: 'Pesan yang otomatis tercopy dan terkirim ke Telegram saat tombol Yes diklik.'
        },
        {
          id: 'no_btn_text',
          label: 'No Button Text',
          type: 'text',
          placeholder: 'e.g. nah sorry fael',
          defaultValue: 'nah sorry fael',
          required: true
        },
        {
          id: 'no_copy_value',
          label: 'No Clipboard Copy Message',
          type: 'text',
          placeholder: 'e.g. nah sorry fael',
          defaultValue: 'nah sorry fael',
          required: true,
          helpText: 'Pesan yang otomatis tercopy jika tombol No diklik.'
        },
        {
          id: 'copied_toast',
          label: 'Toast Notification Message',
          type: 'text',
          placeholder: 'e.g. your answer has been copied.',
          defaultValue: 'your answer has been copied.',
          required: true
        }
      ]
    }
  ]
};
