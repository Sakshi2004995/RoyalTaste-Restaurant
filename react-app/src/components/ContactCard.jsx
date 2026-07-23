function ContactCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="contact-card">
      <i>
        <Icon />
      </i>

      <h3>{item.title}</h3>

      {item.link ? (
        <p>
          <a href={item.link}>
            {item.description}
          </a>
        </p>
      ) : (
        <p>{item.description}</p>
      )}
    </div>
  );
}

export default ContactCard;