use axum::{routing::get, Router};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[tokio::main]
async fn main() {
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "api=debug,tower_http=debug,sqlx=error".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();
    let app = Router::new().route("/", get(|| async { "Heeloo body" }));
    let listener = tokio::net::TcpListener::bind("0.0.0.0:5000").await.unwrap();
    tracing::debug!("API Listening on {}", listener.local_addr().unwrap());
    axum::serve(listener, app.into_make_service())
        .await
        .unwrap();
}
