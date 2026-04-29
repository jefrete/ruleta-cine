import { Movie, Cast, Room, Message } from './types';

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'The Midnight Engine',
    year: '2024',
    genre: ['Sci-Fi', 'Thriller'],
    rating: 8.8,
    duration: '2h 14m',
    synopsis: 'In a decaying megalopolis where dreams can be harvested, a low-level extractor discovers a conspiracy that threatens reality.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZsrc0cAo6gE8ROVfdgbmvI-krKIiCoTU5pP2x3zaT-LyjlofHHG0Pz5OqjPpjM-DB5Nx-odwAkBIsc3oYM26yGEqw5JZD0-Kul9GIO5iSPUtvZRMeKPdei2aEpFbJ0Cc46DJMsh6uYnjatNTFBM4YaaS9_EGIDoQ_ptFSkbFn1yciEBVylkxc_zmVZcWMHP6THzlag7eXTPPClpAgQwzZouyc-mdN1lYb8JEiWJL0Z8zlCxyHjNYIMibQC5Gbi0c7Cj7IsB7KN0dh',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjt9rzAEzSLt6-eJnkNy3GAkCY1OfU9y63FupPfgD75oKX12hT5XZ-0krg2834vn5Aa4OVp0631WJTnFSniYeXCrCYkIBbu2u3pfpvl8zVKR8AjV-G76pMb7MzLCVqeD6iBqMuRv7oIj5wXi4yzr41zB_dDOlq3Qahe-2z7OLLNjAE9YqlVYxzWcHJmFBzmAxVRFEBxsAeIsHj7oijUyAxfOFZmhiKXMNGR68YrMzPGc4yhC9QHvtabACKYDtPNkrmdupT-Cfebcti',
    score: 8.5,
    vibes: ['Atmospheric', 'Mind-Bending', 'Visually Stunning'],
    director: 'Victor Vane',
    budget: '$145M',
    releaseDate: 'Nov 24, 2023'
  },
  {
    id: '2',
    title: 'Velvet Silence',
    year: '2023',
    genre: ['Drama'],
    rating: 9.2,
    duration: '1h 55m',
    synopsis: 'An atmospheric drama about an empty theater where a single shaft of light reveals lost secrets of the past.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsulsSRYGo8x0iPGLSARV3cYZjF-YPXp8nrjlmS1Lc045DMyo-h2nyLTf-qMThAWuQB57ERlmRkOrLOuuOhcY4Id6USTjoSkrmWsctU2TznonI4IfozsTYEHaOeIoYaRihlHbMoFV0vfiOD5QSR6Cl-vYnedceJXDDeDU5wnVpcprGXRXXfGDbMsY8GRDWkli5FtcL1B_Z_b55EAWY-jZlyLeNBX507N0WPt9719meNHGKw8N08cfQp84MukPS7B5UzoRjVZYtfaCl',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsulsSRYGo8x0iPGLSARV3cYZjF-YPXp8nrjlmS1Lc045DMyo-h2nyLTf-qMThAWuQB57ERlmRkOrLOuuOhcY4Id6USTjoSkrmWsctU2TznonI4IfozsTYEHaOeIoYaRihlHbMoFV0vfiOD5QSR6Cl-vYnedceJXDDeDU5wnVpcprGXRXXfGDbMsY8GRDWkli5FtcL1B_Z_b55EAWY-jZlyLeNBX507N0WPt9719meNHGKw8N08cfQp84MukPS7B5UzoRjVZYtfaCl',
    score: 9.0,
    vibes: ['Emotional', 'Grips Your Heart', 'Poetic'],
    director: 'Elena Ruiz',
    budget: '$25M',
    releaseDate: 'Sep 12, 2023'
  },
  {
    id: '3',
    title: 'Neon Drifter',
    year: '2024',
    genre: ['Action', 'Sci-Fi'],
    rating: 8.8,
    duration: '2h 05m',
    synopsis: 'A drifter in a neon city discovers he is the target of an elite squad of corporate assassins.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCArGpSuG3x7Ga9bL-uydq2ev06amCqbHWBxbZhlKMc-S9YalVwdkvAhO83rdsun5DOI6RoGVb0q9FTNteZJfpB7iUqCpVGTKB8IbkFAdj1Ofp4uV81wuaHtF0LSlW6N3rv8pMaWpzMOtuoL0BOe_K36_O7cOt03IMSOvkmatfdmz6OOVH3eBbqD2bFVXv6tv6fe444FKdBIGkRbVWbwwuBYbQr7ILgZ9m8LyzyjxIwt9Z2l64Cnj84y5knhq4ML3_XZUxuNoxMxJIO',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCArGpSuG3x7Ga9bL-uydq2ev06amCqbHWBxbZhlKMc-S9YalVwdkvAhO83rdsun5DOI6RoGVb0q9FTNteZJfpB7iUqCpVGTKB8IbkFAdj1Ofp4uV81wuaHtF0LSlW6N3rv8pMaWpzMOtuoL0BOe_K36_O7cOt03IMSOvkmatfdmz6OOVH3eBbqD2bFVXv6tv6fe444FKdBIGkRbVWbwwuBYbQr7ILgZ9m8LyzyjxIwt9Z2l64Cnj84y5knhq4ML3_XZUxuNoxMxJIO',
    score: 8.8,
    vibes: ['Stylized', 'Fast-Paced', 'Electric'],
    director: 'Kaelen Thorne',
    budget: '$120M',
    releaseDate: 'Jan 15, 2024'
  }
];

export const CAST: Cast[] = [
  { id: 'c1', name: 'Elias Thorne', role: 'Kaelen (Lead)', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKugBgYBWA7nGN0TD-7Z2Pdlse4Ro_XcplTV5TPn1ZzNpekn9xqxS_SnsEtFAk24xhkh_pFyjbh-IDytX1TJbh1dETsnGFIX6CxGgmLmRi4PLLTCFOTtMsEErt1Nk3zH_72Ln2r84TxAoREgi8yXCKpQxhTnAAiiWZcgCpAcSmv5RInZbPw3sCZ8WJq9sV96zZO9acqS5h1XhnwOPxu_IojCGrx6xMHRwu9oE93rqG_3trNbkwoNVnisYvLnqpajds4Waehu2ASN17' },
  { id: 'c2', name: 'Maya Sterling', role: 'The Architect', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIzaluYGZgg3aCcJKnVKOOGBFPNuPcRKY20x7G36-fOP45NV4OwUm_zWCk7DGg3riM0p_dQe1yKDQXWdKA_wcTRwg1_I8Cx4Tt3RHVrUez7Fl-kUJx9d1cU-8A5KSstWFMuA4MBCGN714Mlo4Ro28fnl5ra585QWBnlbOgdukWCbzYPxrJ_57p0zIJgDTAiVw5lYZIWz8Ea2Zq9xYCErIS9g_RyiSIS445wj3tCeaajvvezgu2U1MJZjXp_QALXhVN5pRb59lub21W' },
  { id: 'c3', name: 'Victor Vane', role: 'Director', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClLAes84QpDGIpZXid5SR2ZfonL0aHm8EacaCc-jRC-OLddpyLZEgdDBGSRH1pw_BO5POqyt5Cr9dSxEUvi0VPIuRGVtBXziPTyNMoWO2e4UmdQY98RS9Y7meh7hQWm1Zy0hzEzuMYYdU-UNUzNrFcmHoX-K5IN8BmkNarIfoIzIYO4H_exw_Y9Uik5WkVqlR-PCpHzP1dFOi9fmttxhiYm47Qc-SmfC-PjDgrZaHvfPU53-oPz1P3B2Hw-B6Zf9W9AbFt8dp6rpq_' },
  { id: 'c4', name: 'Sasha Wu', role: 'Memory Tech', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsN84g0z0b-kTiqJnboPwPoHtTLARHtpvo9ttbdBNLxHngkqKA_g84gKDqXmiRXVjGJEt_rrjP8qPp3qIL7LyNOsOz-TGo3Skqe_qMskN8epLYCKi607j4y92v_Jq9x7uiEJhAl3Jjo3TzVf2q44z3B2eaBcoIHDzjCSwFftFtEcQ4XeDjLlwLKTH2QbUmGQTxH80t7WZlgiE4FWz-IrIPKTPHF2O6WkJ7cc3wJz5-KL4qGOI3F-UR1qz0cnZQrvljHzUUrQP6xcQQ' }
];

export const ROOMS: Room[] = [
  {
    id: 'r1',
    title: 'The Dark Knight: Aesthetic',
    status: 'LIVE',
    viewers: '2.4k',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEyHfrY9y2AmMyZYQ1pup8XgNrhdxqtKTnmwELJZxywV0UYwEvJzveQakVtv4Q25t0zXq0lJZ0_ID1fAYdKaxTO27COH9BVM6tV19BqtOZJ74DCq9b1J3ykaJm_cnMUEQxkC2nTBPXD6KqfGGahYBw-TxajSfeke51tbb2HjpYNFAviWJ0LiJuTnoa5-FPE5oKOA7PRe_apleFcMrT6Y_o9OX56qT5vrikWkGwfXABGOFDA6kwis_XoWBNU11YWA-goOcWTiCr7_t3',
    moviePoster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9HZY2BvcT-H4rdTLLkW7CH0raa7OmtCPu5WWMvr_d0Ga71Xl22rLp_x_hHoqm4oALhcS0XiYvNvDnWru9JihYjijn00Hyz2WTPVQsXhG0-Q1dgt0itTRKhUIv31oPAgR5ULSpSA0-gnSXkc5wagLI5tkVFNLK6lMaaJFj_F7yD-E0v0Rk4HSptlbZXJpRN4iV7v2sGwFaW7J8ptE3TWylAof4dFAtOqT3un40DJdRiXSwQ-ODdndbHWr1Hr6Jy55pP1fTxO1cq6Yd'
  },
  {
    id: 'r2',
    title: 'Kubrick Essentials',
    status: 'UPCOMING',
    viewers: '1.8k',
    time: '22:00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXEXGpxPzWsZ6WWuAfbWu0Rsjnw2oVpBqEOMVQGCze8rJdJG78NUVUVwkk_6ioWSM34WJMPzgtANFuqH49teNnCGi2SVo7cTuk_dAZ2Q8joDmoi6xoS8BY7hKX9bu6zjYceXqmTESmWCjMBKSSBy5QD6pB_es0lQkl77VRFVF2u8Iz55bjooyiCVI7ozew_v98AH9O4gAo0Ca-r9_Xq8U2JiuCZxmdpJv1twr-qfcyKoeFhp7MIp0UqGqiVf8bpo2JBWa8EyZbWuPg',
    moviePoster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc1pfp6n4JnTYU-Q8uzaDBap3kqAJUmaU6raNfIfiV6cmEfY6cP-n5O1_ES_DG1ol4p3UpEI9dCP6QDsn4gdNWb0ay9pG8lWSl_LaXSosL2NIefG7KyEGDISLk1QAZT3lmOG9u0TRMYBPgvC9_s6x1fqZLc7IDZjXftAJfV6wrr5npG9yNqb9E2B2LDKFylFhOV-k8r6XorN3QDK8EIDOrDQoR1bWk4mx0jYQBqzSNfboSXkTXmGpLQEZZ5x89UZoBHwapGs4xP5qe'
  }
];

export const MESSAGES: Message[] = [
  { id: 'm1', user: { name: 'Santiago', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeNPnOTVfk34d8uLTeklTi5MaoUCXS2GhjpifW89VhOBp9GZG5DhHRWPkt4BmK_ERgicql6Jis75Pyrjs2b0WP-U27UkKCyKtxDiBY9XN-08ov65xkCdBRNbobrUoYCUk5D-_ZrhWsxIqiBjCHpiEaZwteGCCrOiYzvdvoOIEyrb5jqwShUbEgLThlfM8TZbEwGvTYFDovZSM8Ms-Aijy35mDDVQGr3XmiYn-BaN_9aixcq8LMvawYhRO3jjSvtRH65ELuYmP9p9-Z' }, text: 'La actuación de Heath Ledger es sencillamente de otro planeta. 🃏', timestamp: '20:45' },
  { id: 'm2', user: { name: 'Ana', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8psuQXaM0j31XEU1vqbYCs5f15zTLpSP7qJRrkYEW_TlYvyQ-r14Zd7SETBwhsRcSP6-31X1UJ5ToTEKE-PyaK3sQbSGiHLwXNUND9EXc50EOutYPNNqDsPBi86Mv1jFZGS59s3uciIpwdjMWD7c7-tXPc9Fd8Yw1lnpGBUY92d2u0h1fkGEjJTIlf37KEWSn-m7n6El1zNe2D7-Q5Z7u-b8cnT2yCPK1SrQpMhTAfLdrNoB2UcVMYldDA2E8OnoZCXjjbXwHxvP5', isMod: true }, text: 'Totalmente de acuerdo Santiago. ¿Vieron el detalle de los trucos de magia?', timestamp: '20:46' }
];
